// netlify/functions/server.js
const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Add your other routes here
app.get('/indunil', (req, res) => {
  res.json({ message: 'Hello Indunil' });
});

module.exports.handler = serverless(app);
