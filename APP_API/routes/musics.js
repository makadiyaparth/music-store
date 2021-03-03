const express = require('express');
const router = express.Router();
const ctrlMusic = require('../controllers/music');

router
 .route('/musics')
 .get(ctrlMusic.getMusics)
 .post(ctrlMusic.createMusic);
router
 .route('/musics/:musicid')
 .get(ctrlMusic.getSingleMusic)
 .put(ctrlMusic.updateMusic)
 .delete(ctrlMusic.deleteMusic);

 module.exports = router;