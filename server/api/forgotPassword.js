// api/forgotPassword.js
import { supabase } from '../supabaseClient.js';

export default async function handler(req, res) {
  const allowedOrigins = ['http://localhost:3000', 'https://baldmann.in'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  if (req.method !== 'POST') return res.status(405).end();

  const { email } = req.body;
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/reset-password'
      : 'https://baldmann.in/reset-password'
  });
  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: 'Password reset email sent!' });
} 