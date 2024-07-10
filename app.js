const express = require('express');
const app = express();
const db = require('./db');
const seprate = require('./Routes/userRoute');

// Middleware
app.use(express.json());

// Routes
app.get('/a', (req, res) => {
    res.send("successful");
});

app.use('/sep', seprate.router);

app.get('/admin', (req, res) => {
    db.query('SELECT * FROM admin', (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error executing query');
            return;
        }
        res.json(result);
    });
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
