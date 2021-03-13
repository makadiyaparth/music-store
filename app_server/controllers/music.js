const request = require('request');

const apiOptions = {
    server:'http://localhost:3000'
};

const _renderHomepage = function(req, res, responseBody) {
    res.render('musiclist', {
        musics: responseBody
    });
};

const musiclist = function(req, res) {
    const path = '/api/musics';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json : {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderHomepage(req, res, body);
        }
    );
};

const _renderDetailPage = function(req, res, responseBody) {
    res.render('details', {
        currentmusic : responseBody
    });
};

const musicInfo = function(req, res) {
    const path = `/api/musics/${req.params.musicid}`;
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json : {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderDetailPage(req, res, body);
        }
    );
};
const indexMusic = (req, res) => {
    res.render('index', { title: 'Home' });
};

const _renderCreatePage = function(req, res) {
    res.render('create-new-music', {
       title:"Create New Album" 
    });
};

const addNewMusic = function(req, res) {
    _renderCreatePage(req, res);
};

const doAddNewMusic = function(req, res) {
    const path = '/api/musics';
    const postdata = {
        rank: req.body.rank,
        album: req.body.album,
        artist: req.body.artist,
        songs: req.body.songs,
        yearOfRelease: req.body.yearOfRelease
    };
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postdata
    };
    request(
      requestOptions,
      (err, response, body) => {
          if(response.statusCode === 201) {
              res.redirect('/');
          }
      }  
    );
};
module.exports = {
    musiclist,
    musicInfo,
    addNewMusic,
    doAddNewMusic,
    indexMusic
};