
import Image from 'next/image';
import Link from 'next/link';
import { getImageFocusClass } from '@/lib/imageFocus';

export default function ServiceCard({ service, imageSrc: imageOverride }) {
  const href = `/${service.slug}`;
  const title = service.menuTitle || service.label;
  const imageSrc = imageOverride || service.thumb || service.image;

  return (
    <article className="service-card">
      <Link className="service-card-media" href={href} aria-label={`Vai alla pagina ${title}`}>
        <Image
          src={imageSrc}
          alt={service.label}
          fill
          sizes="(max-width: 900px) 100vw, 33vw"
          className={`cover-image ${getImageFocusClass(imageSrc)}`}
        />
      </Link>
      <div className="service-card-body">
        <p className="card-eyebrow">{service.label}</p>
        <h3>
          <Link className="card-title-link" href={href}>
            {title}
          </Link>
        </h3>
        <p>{service.excerpt}</p>
        <Link className="text-link" href={href}>
          Approfondisci
        </Link>
      </div>
    </article>
  );
}
