/* GET musiclist page */
const musiclist  = function(req, res) {
    res.render('list-display', { musics : musicArray });
};

/* GET home page */
const musicInfo = (req, res) => {
    res.render('index');
};

var musicArray = [
    {
        "id": 1,
        "name": "Blank Space",
        "artist": "Taylor Shift"
    },
    {
        "id": 2,
        "name":"God's Plan",
        "artist":"Drake"
    },
    {
        "id": 3,
        "name":"Stupid Love",
        "artist":"Lady Gaga"
    },
    {
        "id": 4,
        "name":"Halo",
        "artist":"Beyonce"
    },
    {
        "id": 5,
        "name":"Lose Yourself",
        "artist":"Eminem"
    }
]

module.exports = {
    musiclist,
    musicInfo
};