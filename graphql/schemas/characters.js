const characters = `
    type Query{
        characters(page: Int): PageCharacter!
        character(_id: ID): Characters!
        getCharacterAleatorio: Characters!
    }

    type PageCharacter {
        info: InfoPage
        results: [Characters]
    }

    type InfoPage {
        next: Int
        pages: Int
        count: Int
        prev: Int
    }

    type Characters {
        _id: String
        name: String
        status: String
        species: String
        type: String
        gender: String
        origin: String
        location: String
        image: String
        episode: [String]
        created: String
    }
`

exports.schema = characters;