var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET English page. */
router.get('/en', function (req, res, next) {
    res.render('english', {title: 'Express' });
});

router.get('/service', function (req, res, next) {
    res.render('service', {title: 'Express' });
});

module.exports = router;
