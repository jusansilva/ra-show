var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/js', (req, res, next) => {
  res.sendFile(__dirname + 'public/js/app.js');
});

router.get('/css', (req, res, next) => {
  res.sendFile(__dirname + 'public/js/app.css');
});

router.get('/obj', (req, res, next) => {
    res.sendFile(__dirname + 'public/obj/alfa147.obj');
})

router.get('/liber.obj',(req, res, next) => {
    res.sendFile(__dirname + 'public/obj/libert.obj');
})

router.get('/libert.mtl', (req, res, next) =>{
    res.sendFile(__dirname + 'public/obj/libert.mtl');
})

router.get('/fente', (req, res, next) => {
    res.sendFile(__dirname + '/views/img/frente.patt')
})

router.get('/verso', (req, res, next) => {
    res.sendFile(__dirname + '/views/img/verso.patt')
})

module.exports = router;