const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 1700;

app.use(cors());

app.get('/api/ping', (req, res) => {
  res.json({ message: 'Pong from backend!' });
});

// ✅ Add a basic health check endpoint
app.get('/health', (req, res) => {
  res.sendStatus(200); // ECS expects 200 for healthy
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
