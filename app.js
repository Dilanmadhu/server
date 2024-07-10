const express = require('express');
const app = express();

const seprate = require('./Routes/userRoute');

// Middleware
app.use(express.json());

// Routes
app.get('/a', (req, res) => {
    res.send("successful");
});

app.get('/', (req, res)=>{
    res.send("its okay")
})

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
