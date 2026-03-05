"use server";

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface EmailData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export async function sendContactEmails(data: EmailData) {
  try {
    const firstName = data.name.split(' ')[0];

    // 1. Send lead email to hello@nuelit.com
    await transporter.sendMail({
      from: `"Nuelit Contact Form" <${process.env.SMTP_USER}>`,
      to: "hello@nuelit.com",
      replyTo: data.email,
      subject: `New Inquiry from ${data.name}${data.company ? ` (${data.company})` : ''}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Company: ${data.company || 'N/A'}
        
        Message:
        ${data.message}
      `,
      html: `
        <h3>New Inquiry from ${data.name}</h3>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    // 2. Send personalized acknowledgement to the user
    await transporter.sendMail({
      from: `"Nuelit" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: `We received your message, ${firstName}!`,
      text: `Hi ${firstName},\n\nThanks for reaching out to Nuelit! This is just to let you know we've received your inquiry and our team will get back to you within 48 hours.\n\nBest regards,\nThe Nuelit Team`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2>Hi ${firstName},</h2>
          <p>Thanks for reaching out to <strong>Nuelit</strong>!</p>
          <p>This is just to let you know we've received your inquiry and our team will get back to you within <strong>48 hours</strong>.</p>
          <br/>
          <p>Best regards,<br/>The Nuelit Team</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Failed to send email');
  }
}
