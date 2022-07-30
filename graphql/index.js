const makeExecutableSchema = require("graphql-tools").makeExecutableSchema;
const characters = require("./schemas/characters.js").schema;
const episodes = require("./schemas/episodes.js").schema;
const locations = require("./schemas/locations.js").schema;
const resolverCharacters = require("./resolvers/characters.js").res;
const resolverEpisodes = require("./resolvers/episodes.js").res;
const resolverLocations = require("./resolvers/locations.js").res;
require("graphql-import-node");

exports.schema = makeExecutableSchema({
    typeDefs: [
        characters,
        episodes,
        locations
    ],
    resolvers: [
        resolverCharacters,
        resolverEpisodes,
        resolverLocations
    ]
});