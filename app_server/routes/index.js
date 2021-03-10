var express = require('express');
var router = express.Router();
const ctrlAbout = require('../controllers/about');
const ctrlMusic= require('../controllers/music');

/* GET home page. */
router.get('/', ctrlMusic.indexMusic);
router.get('/musics/:musicid', ctrlMusic.musicInfo);
router.get('/new', ctrlMusic.createMusic);
/* GET music list page. */
router.get('/list', ctrlMusic.musiclist);
/* GET about page. */
router.get('/about', ctrlAbout.about);


module.exports = router;
