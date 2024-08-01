/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sendgrid from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

type Body = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  token: string;
};

const verifyRecaptcha = async (token: string) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY!;

  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  const response = await fetch(verificationUrl, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    },
    method: 'POST',
  });

  const captchaValidation = await response.json();

  return captchaValidation as {
    success: boolean;
    score: number;
    challenge_ts: string;
    hostname: string;
  };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(400).json({ message: 'Invalid method' });
    }

    if (!req.body) {
      return res.status(400).json({ message: 'Invalid body' });
    }

    const data = JSON.parse(req.body);

    if (!data?.name || !data?.phone || !data?.email || !data?.subject || !data?.token) {
      return res.status(400).json({ message: 'Invalid data' });
    }

    const { name, phone, email, subject, token } = data as Body;

    const recaptchaResponse = await verifyRecaptcha(token);

    if (!recaptchaResponse?.success || recaptchaResponse?.score < 0.5) {
      return res.status(400).json({ message: 'Invalid token' });
    }

    sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

    await sendgrid.send({
      to: process.env.SENDGRID_TO_EMAIL!,
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject: 'Nuevo prospecto desde cargomonterrey.com',
      text: 'Se ha registrado un prospecto a través de cargomonterrey.com (e-commerce)',
      html: `
      <p>Se ha registrado un prospecto a través de cargomonterrey.com (e-commerce)</p>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Subject</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${name}</td>
          <td>${phone}</td>
          <td>${email}</td>
          <td>${subject}</td>
        </tr>
      </tbody>
      </table>`,
    });

    return res.status(200).json({ message: 'Ok' });
  } catch {
    return res.status(500).json({ message: 'Something went wrong, please try again.' });
  }
}
