const express = require('express')
const router = express.Router()

router.use('/',(req, res, next) =>{
    res.send("hello. this is seperate route")
  });

router.use('/',(req, res, next) =>{
    for (let a = 0; a < 1; a++) {
  for (let b = 0; b < 1; b++) {
    for (let c = 0; c < 1; c++) {
      for (let d = 0; d < 1; d++) {
        for (let e = 0; e < 1; e++) {
          for (let f = 0; f < 1; f++) {
            console.log(a, b, c, d, e, f);
          }
        }
      }
    }
  }
}

    res.send("hello. this is seperate route")
  });

module.exports.router = router;
