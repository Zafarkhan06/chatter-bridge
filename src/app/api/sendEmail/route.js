import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { fullName, email, message } = await request.json();

  console.log("Received form data:", { fullName, email, message });

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  console.log("Transporter created with:", { 
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS ? "[REDACTED]" : "undefined" 
  });

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'info@thechatterbridge.com',
    subject: 'New Message from Your Website',
    text: `Full Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    console.log("Attempting to send email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: 'Error sending email', details: error.message }, { status: 500 });
  }
}