const imageFocusMap = {
  '/images/home/hero-avvocato.webp': 'image-focus-hero-avvocato',
  '/images/hero-portrait.webp': 'image-focus-portrait',
  '/images/portrait-standing.webp': 'image-focus-standing',
  '/images/portrait-certificate.webp': 'image-focus-portrait-soft',
  '/images/portrait-smile.webp': 'image-focus-portrait-soft',
  '/images/portrait-soft.webp': 'image-focus-portrait-soft',
  '/images/team-boardroom.webp': 'image-focus-boardroom',
  '/images/team-boardroom-wide.webp': 'image-focus-boardroom',
  '/images/team-meeting.webp': 'image-focus-meeting',
  '/images/team-meeting-wide.webp': 'image-focus-meeting',
  '/images/team-selfie.webp': 'image-focus-selfie',
  '/images/desk-signature.webp': 'image-focus-desk',
  '/images/desk-signature-wide.webp': 'image-focus-desk',
  '/images/thumb-cassazione-penale.webp': 'image-focus-cassazione-penale',
  '/images/thumb-successioni.webp': 'image-focus-successioni'
};

export function getImageFocusClass(src, fallback = 'image-focus-center') {
  if (typeof src !== 'string') return fallback;
  return imageFocusMap[src] || fallback;
}
