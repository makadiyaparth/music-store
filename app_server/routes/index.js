var express = require('express');
var router = express.Router();
const ctrlAbout = require('../controllers/about');
const ctrlMusic= require('../controllers/music');

/* GET home page. */
router.get('/', ctrlMusic.musicInfo);
/* GET music list page. */
router.get('/list', ctrlMusic.musiclist);
/* GET about page. */
router.get('/about', ctrlAbout.about);


module.exports = router;
