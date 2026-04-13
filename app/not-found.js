
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container not-found">
        <p className="eyebrow">Pagina non trovata</p>
        <h1>La pagina richiesta non è disponibile.</h1>
        <p>
          Puoi tornare alla homepage, consultare le aree di attività oppure usare la pagina contatti
          per inviare una richiesta allo studio.
        </p>
        <div className="button-row">
          <Link href="/" className="button button-primary">
            Torna alla home
          </Link>
          <Link href="/contatti" className="button button-ghost">
            Vai ai contatti
          </Link>
        </div>
      </div>
    </section>
  );
}
