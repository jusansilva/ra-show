var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('claudio', () => {
    res.render('claudio', {title: 'Claudio Back'});
})

module.exports = router;
