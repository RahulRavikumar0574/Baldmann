// api/chat.js
import { supabase } from '../server/supabaseClient';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { user_id, messages } = req.body;
  if (!user_id || !messages) {
    return res.status(400).json({ error: 'user_id and messages are required' });
  }

  const { data, error } = await supabase
    .from('chat_history')
    .insert([{ user_id, messages }])
    .select();

  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(201).json(data[0]);
}