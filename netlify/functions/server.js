// netlify/functions/server.js
const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Add your other routes here
app.get('/indunil', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple HTML Page</title>
    </head>
    <body>
      <h1>Hello, World!</h1>
      <p>This is a simple HTML page rendered by Express.</p>
    </body>
    </html>
  `);
});

module.exports.handler = serverless(app);
