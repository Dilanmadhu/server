const express = require('express');
const app = express();

const seprate = require('./Routes/userRoute');

// Middleware
app.use(express.json());

// Routes
app.get('/a', (req, res) => {
   const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #f0f0f0;
                margin: 0;
            }
            .container {
                text-align: center;
                background: #fff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
                color: #333;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Welcome to the Express App!</h1>
            <p>This is the /a route.</p>
        </div>
    </body>
    </html>
    `;
    res.send(htmlContent);});

app.get('/', (req, res)=>{
    res.send("its okay")
})

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
