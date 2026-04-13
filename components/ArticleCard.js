
import Image from 'next/image';
import Link from 'next/link';
import { getImageFocusClass } from '@/lib/imageFocus';

export default function ArticleCard({ article }) {
  const href = `/approfondimenti/${article.slug}`;

  return (
    <article className="article-card">
      <Link href={href} className="article-card-media" aria-label={`Leggi l'approfondimento ${article.title}`}>
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 900px) 100vw, 33vw"
          className={`cover-image ${getImageFocusClass(article.image)}`}
        />
      </Link>
      <div className="article-card-body">
        <p className="card-eyebrow">{article.category}</p>
        <h3>
          <Link className="card-title-link" href={href}>
            {article.title}
          </Link>
        </h3>
        <p>{article.description}</p>
        <div className="article-card-meta">
          <span>{article.readTime}</span>
          <Link className="text-link" href={href}>
            Leggi
          </Link>
        </div>
      </div>
    </article>
  );
}
