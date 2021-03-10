const request = require('request');

const apiOptions = {
    server:'http://localhost:3000'
};

const _renderHomepage = function(req, res, responseBody) {
    res.render('index', {
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
    res.render('music-info', {
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

const createMusic = (req, res) => {
    res.render('create', { title: 'Create Music' });
};
module.exports = {
    musiclist,
    musicInfo,
    createMusic
};