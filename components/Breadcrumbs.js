
import Link from 'next/link';

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.item}>
          {index > 0 ? <span className="breadcrumbs-sep">/</span> : null}
          {index === items.length - 1 ? (
            <span>{item.name}</span>
          ) : (
            <Link href={item.item}>{item.name}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}
