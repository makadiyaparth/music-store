var express = require('express');
var router = express.Router();
// const ctrMain = require('../controllers/main');
const ctrlAbout = require('../controllers/about');
const ctrlMusic= require('../controllers/music');

/* GET home page. */
router.get('/', ctrlMusic.musicInfo);
router.get('/list', ctrlMusic.musiclist);
router.get('/about', ctrlAbout.about);


module.exports = router;
