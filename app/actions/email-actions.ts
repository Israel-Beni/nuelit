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

interface PaymentData {
  name: string;
  email: string;
  amount: string;
  items: string[];
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
export async function sendPaymentConfirmationEmail(data: PaymentData) {
  try {
    const firstName = data.name.split(' ')[0];

    // 1. Send notification to hello@nuelit.com
    await transporter.sendMail({
      from: `"Nuelit Payments" <${process.env.SMTP_USER}>`,
      to: "hello@nuelit.com",
      subject: `New Payment Received: $${data.amount} from ${data.name}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Amount: $${data.amount}
        Items: ${data.items.join(', ')}
      `,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #10b981;">New Payment Received!</h2>
          <p><strong>Customer:</strong> ${data.name} (${data.email})</p>
          <p><strong>Amount:</strong> $${data.amount}</p>
          <p><strong>Items:</strong></p>
          <ul>
            ${data.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      `,
    });

    // 2. Send confirmation to the customer
    await transporter.sendMail({
      from: `"Nuelit" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: `Payment Confirmed - Thank you, ${firstName}!`,
      text: `Hi ${firstName},\n\nThank you for your payment of $${data.amount}. We have received your order and our team will be in touch with you shortly to begin your service.\n\nBest regards,\nThe Nuelit Team`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #2563eb;">Payment Received!</h2>
          <p>Hi ${firstName},</p>
          <p>Thank you for choosing <strong>Nuelit</strong>. We’ve successfully received your payment of <strong>$${data.amount}</strong>.</p>
          <p>We are excited to help you with your career journey! Our team is already reviewing your order and we will reach out to you shortly to get started.</p>
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold; color: #64748b; font-size: 12px; text-transform: uppercase;">Items Confirmed:</p>
            <ul style="margin: 10px 0 0; padding-left: 20px;">
               ${data.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
          <p>If you have any questions in the meantime, feel free to reply to this email.</p>
          <br/>
          <p>Best regards,<br/><strong>The Nuelit Team</strong></p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Payment email sending failed:', error);
    throw new Error('Failed to send payment confirmation email');
  }
}
