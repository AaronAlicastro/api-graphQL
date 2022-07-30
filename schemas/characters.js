const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characters = new Schema({
    name: String,
    status: String,
    species: String,
    type: String,
    gender: String,
    origin: String,
    location: String,
    image: String,
    episode: [String],
    created: String
});

module.exports = mongoose.model( "characters" , characters);