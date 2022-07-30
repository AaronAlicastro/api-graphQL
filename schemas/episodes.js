const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const episodes = new Schema({
    name: String,
    air_date: String,
    episode: String,
    characters: [String],
    created: String
});

module.exports = mongoose.model( "episodes" , episodes);