require('dotenv').config();
// backend/server.js

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const supabase = require('./supabaseClient');

const app = express();

app.use(cors({
  origin: 'https://baldmann-lv4v-shreya-agarwals-projects.vercel.app',
}));
app.use(bodyParser.json());

// Health check
app.use('/', (req, res) => {
  res.json('Server Running');
});

// --- Supabase Auth Endpoints ---
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) return res.status(400).json({ error: error.message });
  res.json({ user: data.user });
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return res.status(400).json({ error: error.message });
  res.json({ user: data.user, session: data.session });
});

// --- Supabase Chat History Endpoints ---
app.post('/api/chat', async (req, res) => {
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
});

app.get('/api/history/:user_id', async (req, res) => {
  const { user_id } = req.params;
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
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
