const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const apolloServer = require("apollo-server-express").ApolloServer;
const schema = require("./graphql").schema;
const depthLimit = require("graphql-depth-limit");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
require("dotenv").config();

mongoose.connect( process.env.LINK )
.then( e => console.log("Se ha conectado con la base de datos"))
.catch(error=> console.log(error));

const characters = require("./schemas/characters.js");
const episodes = require("./schemas/episodes.js");
const locations = require("./schemas/locations.js");

const server = new apolloServer({
    schema,
    playground: true,
    introspection: true,
    context: () => {
        return {
            characters,
            episodes,
            locations
        }
    },
    validationRules: [
        depthLimit(2)
    ]
});

server.start().then(e => {
    server.applyMiddleware({ app });
});


app.listen(2004);