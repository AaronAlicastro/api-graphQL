const episodes = `
    type Query{
        episodes(page: Int): PageEpisode!
        episode(_id: ID): Episodes!
    }

    type PageEpisode {
        info: InfoPage
        results: [Episodes]
    }

    type InfoPage {
        next: Int
        pages: Int
        count: Int
        prev: Int
    }

    type Episodes {
        _id: String
        name: String
        air_date: String
        episode: String
        characters: [String]
        created: String
    }
`

exports.schema = episodes;