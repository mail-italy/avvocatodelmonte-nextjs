'use client';

import { useRef, useState } from 'react';
import { siteConfig } from '@/lib/site';
import { MAX_FILE_SIZE, FIELD_LIMITS, CONTACT_AREAS } from '@/lib/contact-config.mjs';
import { readConsent, isTrackingHost } from '@/lib/consent.mjs';

const initialState = {
  nome: '',
  cognome: '',
  telefono: '',
  email: '',
  area: '',
  messaggio: '',
  website: ''
};

export default function ContactForm({ compact = false, trackingLocation = 'contact_form' }) {
  const [form, setForm] = useState(initialState);
  const [fileName, setFileName] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [pending, setPending] = useState(false);
  const formRef = useRef(null);
  const fileInputRef = useRef(null);

  function clearStatusIfNeeded() {
    if (status.message) {
      setStatus({ type: '', message: '' });
    }
  }

  function updateField(event) {
    const { name, value } = event.target;
    clearStatusIfNeeded();
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleFileChange(event) {
    clearStatusIfNeeded();

    const file = event.target.files?.[0];

    if (!file) {
      setFileName('');
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setStatus({
        type: 'error',
        message: 'L’allegato supera il limite di 4 MB. Riduci il file e riprova.'
      });
      setFileName('');

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return;
    }

    setFileName(file.name);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setPending(true);
    setStatus({ type: '', message: '' });
    const currentForm = formRef.current;

    if (!currentForm) {
      setPending(false);
      setStatus({
        type: 'error',
        message: 'Il modulo non è disponibile in questo momento. Ricarica la pagina e riprova.'
      });
      return;
    }

    const data = new FormData(currentForm);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: data
      });

      const result = await response.json().catch(() => ({ message: response.status === 413 ? 'La richiesta è troppo grande. Riduci l’allegato a un massimo di 4 MB.' : 'Invio non riuscito. Riprova più tardi.' }));

      if (!response.ok) {
        throw new Error(result?.message || 'Invio non riuscito.');
      }
      if (result?.delivered !== true) {
        throw new Error('Non è stato possibile confermare l’invio. Riprova o contatta lo studio via email o telefono.');
      }

      setStatus({
        type: 'success',
        message:
          'Richiesta inviata correttamente. Il materiale ricevuto potrà essere esaminato per una prima valutazione preliminare.'
      });
      if (readConsent() === 'accepted' && isTrackingHost(window.location.hostname) && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: 'form_submit',
          form_name: 'contact_form',
          form_location: trackingLocation
        });
        window.dataLayer.push({
          event: 'generate_lead',
          lead_channel: 'contact_form',
          form_location: trackingLocation
        });
      }
      setForm(initialState);
      setFileName('');

      currentForm.reset();

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Si è verificato un problema durante l’invio.'
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      ref={formRef}
      className={`contact-form ${compact ? 'is-compact' : ''}`}
      onSubmit={handleSubmit}
    >
      <div className="form-header">
        <h3>Modulo di contatto</h3>
        <p className="form-intro">
          Indica l’ambito della richiesta, riassumi i fatti essenziali e allega, se disponibili,
          solo i documenti realmente utili al primo esame gratuito.
        </p>
      </div>

      <div className="form-grid two">
        <label>
          <span>Nome</span>
          <input name="nome" minLength={FIELD_LIMITS.nome.min} maxLength={FIELD_LIMITS.nome.max} value={form.nome} onChange={updateField} required />
        </label>
        <label>
          <span>Cognome</span>
          <input name="cognome" minLength={FIELD_LIMITS.cognome.min} maxLength={FIELD_LIMITS.cognome.max} value={form.cognome} onChange={updateField} required />
        </label>
      </div>

      <div className="form-grid two">
        <label>
          <span>Telefono</span>
          <input name="telefono" minLength={FIELD_LIMITS.telefono.min} maxLength={FIELD_LIMITS.telefono.max} type="tel" value={form.telefono} onChange={updateField} required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" minLength={FIELD_LIMITS.email.min} maxLength={FIELD_LIMITS.email.max} type="email" value={form.email} onChange={updateField} required />
        </label>
      </div>

      <label>
        <span>Ambito della richiesta</span>
        <select name="area" value={form.area} onChange={updateField} required>
          <option value="">Seleziona l’area pertinente</option>
          {CONTACT_AREAS.map((area) => <option key={area} value={area}>{area}</option>)}
        </select>
      </label>

      <label>
        <span>Sintesi del caso</span>
        <textarea
          name="messaggio"
          minLength={FIELD_LIMITS.messaggio.min}
          maxLength={FIELD_LIMITS.messaggio.max}
          rows={compact ? 4 : 6}
          value={form.messaggio}
          onChange={updateField}
          placeholder="Descrivi in modo essenziale la situazione, i passaggi già avvenuti, eventuali urgenze e i documenti che hai già disponibili."
          required
        />
      </label>

      <label className="file-field">
        <span>Allega i documenti essenziali</span>
        <input
          ref={fileInputRef}
          name="allegato"
          type="file"
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp"
          onChange={handleFileChange}
        />
        <small>
          {fileName
            ? `File selezionato: ${fileName}`
            : 'Un file fino a 4 MB. Formati accettati: PDF, DOC, DOCX, JPG, PNG, WEBP. Meglio pochi documenti essenziali e pertinenti che materiali eccessivi o non rilevanti.'}
        </small>
      </label>

      <label className="honeypot-field" aria-hidden="true">
        <span>Website</span>
        <input
          name="website"
          value={form.website}
          onChange={updateField}
          autoComplete="off"
          tabIndex={-1}
        />
      </label>

      {status.message ? <div className={`form-status ${status.type}`} role="status">{status.message}</div> : null}

      <div className="form-actions">
        <button
          type="submit"
          className="button button-primary"
          disabled={pending}
          data-event="generate_lead"
          data-event-location={trackingLocation}
        >
          {pending ? 'Invio in corso…' : 'Invia la richiesta'}
        </button>
        <a
          className="button button-whatsapp"
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          data-event="contact_whatsapp"
          data-event-location={trackingLocation}
        >
          WhatsApp
        </a>
      </div>
    </form>
  );
}
