
export default function JsonLd({ data }) {
  const payload = (Array.isArray(data) ? data : [data]).filter(
    (item) => item && typeof item === 'object'
  );

  if (!payload.length) {
    return null;
  }

  return payload.map((item, index) => (
    <script
      key={index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
    />
  ));
}
