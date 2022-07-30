const locations = `
    type Query{
        locations(page: Int): PageLocation!
        location(_id: ID): Locations!
    }

    type PageLocation {
        info: InfoPage
        results: [Locations]
    }

    type InfoPage {
        next: Int
        pages: Int
        count: Int
        prev: Int
    }

    type Locations {
        _id: String
        name: String
        type: String
        dimension: String
        residents: [String]
        created: String
    }
`

exports.schema = locations;