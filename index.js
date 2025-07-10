const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 1700;

app.use(cors());

app.get('/api/ping1', (req, res) => {
  res.json({ message: 'Pong from backend!' });
});

app.get('/api/ping2', (req, res) => {
  res.json({ message: 'Pong from backend!' });
});

app.get('/api/ping3', (req, res) => {
  res.json({ message: 'Pong from backend!' });
});


app.get('/api/ping4', (req, res) => {
  res.json({ message: 'Pong from backend!' });
});

app.get('/api/ping5', (req, res) => {
  res.json({ message: 'Pong from backend!' });
});

app.get('/api/ping6', (req, res) => {
  res.json({ message: 'Pong from backend!' });
});

app.get('/api/ping7', (req, res) => {
  res.json({ message: 'Pong from backend!' });
});


app.get('/api/ping8', (req, res) => {
  res.json({ message: 'Pong from backend!' });
});


app.get('/api/ping9', (req, res) => {
  res.json({ message: 'Pong from backend!' });
});


// ✅ Add a basic health check endpo int
app.get('/health', (req, res) => {
  res.sendStatus(200); // ECS expects 200 for healthy
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
