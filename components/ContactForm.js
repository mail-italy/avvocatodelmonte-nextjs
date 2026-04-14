'use client';

import { useRef, useState } from 'react';
import { siteConfig } from '@/lib/site';

const initialState = {
  nome: '',
  cognome: '',
  telefono: '',
  email: '',
  area: '',
  messaggio: '',
  website: ''
};

export default function ContactForm({ compact = false }) {
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

    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      setStatus({
        type: 'error',
        message: 'L’allegato supera il limite di 10 MB. Riduci il file e riprova.'
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

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Invio non riuscito.');
      }

      setStatus({
        type: 'success',
        message:
          'Richiesta inviata correttamente. Il materiale ricevuto potrà essere esaminato per una prima valutazione preliminare.'
      });
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
          <input name="nome" value={form.nome} onChange={updateField} required />
        </label>
        <label>
          <span>Cognome</span>
          <input name="cognome" value={form.cognome} onChange={updateField} required />
        </label>
      </div>

      <div className="form-grid two">
        <label>
          <span>Telefono</span>
          <input name="telefono" type="tel" value={form.telefono} onChange={updateField} required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" value={form.email} onChange={updateField} required />
        </label>
      </div>

      <label>
        <span>Ambito della richiesta</span>
        <select name="area" value={form.area} onChange={updateField} required>
          <option value="">Seleziona l’area pertinente</option>
          <option value="Cassazione civile">Cassazione civile</option>
          <option value="Cassazione penale">Cassazione penale</option>
          <option value="Responsabilità medica">Responsabilità medica</option>
          <option value="Risarcimento danni">Risarcimento danni</option>
          <option value="Incidente stradale grave">Incidente stradale grave</option>
          <option value="Infortunio sul lavoro">Infortunio sul lavoro</option>
          <option value="Successioni complesse">Successioni complesse</option>
          <option value="Mediazione e risoluzione stragiudiziale">Mediazione e risoluzione stragiudiziale</option>
          <option value="Impugnazione del testamento">Impugnazione del testamento</option>
        </select>
      </label>

      <label>
        <span>Sintesi del caso</span>
        <textarea
          name="messaggio"
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
            : 'Formati accettati: PDF, DOC, DOCX, JPG, PNG, WEBP. Meglio pochi documenti essenziali e pertinenti che materiali eccessivi o non rilevanti.'}
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

      {status.message ? <div className={`form-status ${status.type}`}>{status.message}</div> : null}

      <div className="form-actions">
        <button type="submit" className="button button-primary" disabled={pending}>
          {pending ? 'Invio in corso…' : 'Invia la richiesta'}
        </button>
        <a
          className="button button-whatsapp"
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </form>
  );
}
