

//FileName: index.js
//created by Deepa k
// student id :301250548
//30th September



var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});



/* GET home page if someone types home  */

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});


/* GET About Me  page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me'});
});


/* GET Projects page. */

router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects'});
});



/* GET Services page. */

router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});



/* GET Contact Me page. */

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me'});
});


module.exports = router;
