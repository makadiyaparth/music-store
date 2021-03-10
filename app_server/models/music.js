const mongoose = require('mongoose')

//creating schema

const reviewSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    author: String,
    rating: {
        type: Number,
        required: true,
        'default': 0,
        min: 0,
        max: 5
    },
    reviewText: String,
});

const musicSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    album: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    songs: [String],
    yearOfRelease : {
        type: Number,
        min: 4,
        max: 4 
    },
    reviews: [reviewSchema] //creating subdocument
});


   mongoose.model('Music', musicSchema);