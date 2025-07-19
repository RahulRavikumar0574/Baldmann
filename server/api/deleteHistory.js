import { supabase } from '../supabaseClient.js';

export default async function handler(req, res) {
  const allowedOrigins = ['http://localhost:3000', 'https://baldmann.in'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  if (req.method !== 'DELETE') return res.status(405).end();

  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'id is required' });

  const { error } = await supabase.from('chat_history').delete().eq('id', id);
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ success: true });
} 