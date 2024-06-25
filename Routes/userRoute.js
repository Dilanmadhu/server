const express = require('express')
const router = express.Router()

router.use('/',(req, res, next) =>{
    res.send("hello. this is seperate route")
  });

module.exports.router = router;