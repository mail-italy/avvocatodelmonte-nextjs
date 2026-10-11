export const MAX_FILE_SIZE = 4 * 1024 * 1024;
// Includes all multipart fields and boundaries, below Vercel's 4.5 MB request limit.
export const MAX_REQUEST_BYTES = 4_400_000;
export const CONTACT_AREAS = [
  'Cassazione civile', 'Cassazione penale', 'Responsabilità medica', 'Risarcimento danni',
  'Incidente stradale grave', 'Infortunio sul lavoro', 'Successioni complesse',
  'Mediazione e risoluzione stragiudiziale', 'Impugnazione del testamento'
];
export const FIELD_LIMITS = {
  nome: { min: 2, max: 80 }, cognome: { min: 2, max: 80 },
  telefono: { min: 6, max: 30 }, email: { min: 6, max: 160 },
  area: { min: 2, max: 120 }, messaggio: { min: 10, max: 4000 }
};
