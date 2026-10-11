import nodemailer from 'nodemailer';
import { createContactHandler } from '@/lib/contact-handler.mjs';

export const runtime = 'nodejs';

async function sendMail(message) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  const port = Number(SMTP_PORT);
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL || CONTACT_FROM_EMAIL !== SMTP_USER || !Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('contact-configuration');
  }
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST, port, secure: port === 465, requireTLS: port !== 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    disableFileAccess: true, disableUrlAccess: true,
    connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 20000
  });
  try { return await transporter.sendMail({ ...message, to: CONTACT_TO_EMAIL, from: CONTACT_FROM_EMAIL }); }
  finally { transporter.close(); }
}

export const POST = createContactHandler({
  sendMail,
  // Preview and localhost never deliver mail, even if credentials happen to be present.
  enabled: () => process.env.VERCEL_ENV === 'production' && process.env.CONTACT_DISABLE_DELIVERY !== 'true',
  logError: (code) => console.error(`[contact] ${code}`)
});
