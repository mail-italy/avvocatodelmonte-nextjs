// Contact clicks express intent; only confirmed server delivery emits generate_lead.
// Never include the link destination, form values or legal practice area.
export function contactClickEvent(event, href = '', location = '') {
  const matches = {
    contact_phone: /^tel:/i,
    contact_email: /^mailto:/i,
    contact_whatsapp: /^https:\/\/(?:wa\.me\/|api\.whatsapp\.com\/)/i
  };
  if (!matches[event]?.test(href)) return null;
  return { event, event_location: String(location).replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 100) || 'unspecified' };
}
