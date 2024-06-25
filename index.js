const express = require('express')
const app = express()
const db = require('./db');
const seprate = require('./Routes/userRoute');
const serverless = require("serverless-http");



app.get('/a', (req, res) => {
    res.send("successful")  
})

app.use('/sep',seprate.router);

app.get('/admin', (req, res) => {
    db.query('SELECT * FROM admin', (err, result) => {
    if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Error executing query');
        return;
      }
      res.json(result);})
})


app.listen(3000, ()=>{
    console.log("server is listning")
})

module.exports.handler = serverless(app);