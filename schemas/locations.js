const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locations = new Schema({
    name: String,
    type: String,
    dimension: String,
    residents: [String],
    created: String
});

module.exports = mongoose.model( 'locations' , locations);