// api/history.js
import { supabase } from '../server/supabaseClient';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://baldmann.in');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') return res.status(405).end();

  const { user_id } = req.query;
  if (!user_id) {
    return res.status(400).json({ error: 'user_id is required' });
  }

  const { data, error } = await supabase
    .from('chat_history')
    .select('*')
    .eq('user_id', user_id)
    .order('created_at', { ascending: false });

  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.json(data);
}