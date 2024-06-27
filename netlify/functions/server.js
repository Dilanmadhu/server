// netlify/functions/server.js
const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Add your other routes here
app.get('/niro', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Colorful Page1</title>
      <style>
        body {
          background-color: #f0f8ff;
          font-family: Arial, sans-serif;
        }
        h1 {
          color: #ff4500;
          text-align: center;
          margin-top: 50px;
        }
        p {
          color: #4682b4;
          font-size: 18px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <h1>Hello Bada</h1>
      <p>Welcome to your colorful page!</p>
    </body>
    </html>
    
  `);
});

module.exports.handler = serverless(app);
