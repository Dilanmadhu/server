const express = require('express')
const router = express.Router()

router.use('/',(req, res, next) =>{
    res.send("hello. this is seperate route")
  });

router.use('/',(req, res, next) =>{
    for (let i = 1; i <= 3; i++) {
          console.log("Outer loop i =", i);
        
          for (let j = 1; j <= 2; j++) {
            console.log("  Inner loop j =", j);
          }
        }
    res.send("hello. this is seperate route")
  });

module.exports.router = router;
