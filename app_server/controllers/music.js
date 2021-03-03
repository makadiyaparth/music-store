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
        id: 1,
        album: "After Hours",
        artist: "The Weeknd",
        songs: ["Alone Again ", "Too Late ", "Heartless ", "Blinding Lights"],
        yearOfRelease: 2020,
        reviews: [{
            author: 'Alexender',
            rating: 5,
            reviewText: 'This is the best album till now.'
        }]
    },
    {
        id: 2,
        album: "Kamikaze",
        artist: "Eminem",
        songs: ["The Ringer ", "Greatest ", "Lucky You ", "Fall"],
        yearOfRelease: 2018,
        reviews: [{
            author: 'Nick',
            rating: 4,
            reviewText: 'What a Great Album!'
        }]
    },
    {
        id: 3,
        album: "Future Nostalgia",
        artist: "Dua Lipa",
        songs: ["Future Nostalgia ", "Don't Start Now ", "Physical"],
        yearOfRelease: 2020,
        reviews: [{
            author: 'Ricky',
            rating: 4,
            reviewText: 'I can\'t say enough good things about it.'
        }]
    },
    {
        id: 4,
        album: "EVERMORE",
        artist: "Taylor Shift",
        songs: ["Willow ", "Gold Rush ", "Happiness ", "Ivy ", "Evermore"],
        yearOfRelease: 2020,
        reviews: [{
            author: 'Glann',
            rating: 5,
            reviewText: 'I don\'t have enough words for this album.'
        }]
    },
    {
        id: 5,
        album: "Hollywood's Bleeding",
        artist: "Post Malone",
        songs: ["Enemies ", "Circles ", "Die for me ", "On the road"],
        yearOfRelease: 2019,
        reviews: [{
            author: 'Paul',
            rating: 3,
            reviewText: 'This album is not upto that mark.'
        }]
    }
]

module.exports = {
    musiclist,
    musicInfo
};