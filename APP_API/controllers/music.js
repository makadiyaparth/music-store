const { musiclist } = require("../../app_server/controllers/music");

const getMusics = function (req, res) {
    Music.find().exec(function (err, musicdata) {
        if(err) {
            res
            .status(404)
            .json(err);
        return;
        }
        res
        .status(200)
        .json(musicdata);
    });
};

const getSingleMusic = (req, res) => {
    Music
        .findById(req.params.musicid)
        .exec((err, musicdata) => {
        if (!musicdata) {
            return res
            .status(404)
            .json({"message": "music not found"});
        } else if (err) {
            return res
            .status(404)
            .json(err);
    }
    res
        .status(200)
        .json(musicdata);
    });
};

const createMusic = function(req, res) {
    Music.create({
        name: req.body.name,
        type: req.body.type
    }, (err, musicdata) => {
        if(err) {
            res
            .status(400)
            .json(err);
        } else {
            res
            .status(201)
            .json(musicdata);
        }
    });
};

const updateMusic = (req, res) => {
    if(!req.params.musicid) {
        res.status(404)
        .json({
            "message" : "Not found, musicid is required"
        });
        return;
    }
    Music.findById(req.params.musicid)
        .exec((err, musicdata) => {
            if (!musicdata) {
                res
                .status(404)
                .json({"message": "musicid not found"});
                return;
            } else if (err) {
                res
                .status(400)
                .json(err);
                return;
            }
        musicdata.name = req.body.name;
        musicdata.type = req.body.type;
        musicdata.save((err, musicdata) => {
            if(err) {
                res
                .status(404)
                .json(err);
            }
            else {
                res
                .status(200)
                .json(musicdata);
            }
        });
    });
};

const deleteMusic = (req, res) => {
    const musicid = req.params.musicid;

    if(musicid) {
        Music
        .findByIdAndRemove(musicid)
        .exec((err, musicdata) => {
            if(err) {
                res 
                .status(404)
                .json(err);
            return;
            }
        res
        .status(204)
        .json(null);
        });

    } else {
            res
            .status(404)
            .json({"message" : "No musicid"});
        }
};

module.exports = {
    getMusics,
    createMusic,
    getSingleMusic,
    updateMusic,
    deleteMusic
}