var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/js', function(req, res, next) {
  res.sendFile(__dirname + 'public/js/app.js');
});

router.get('/css', function(req, res, next) {
  res.sendFile(__dirname + 'public/js/app.css');
});

router.get('/obj', function(req, res, next){
    res.sendFile(__dirname + 'public/obj/alfa147.obj');
})

router.get('/liber.obj', function(req, res, next){
    res.sendFile(__dirname + 'public/obj/libert.obj');
})

router.get('/libert.mtl', function(req, res, next){
    res.sendFile(__dirname + 'public/obj/libert.mtl');
})

module.exports = router;