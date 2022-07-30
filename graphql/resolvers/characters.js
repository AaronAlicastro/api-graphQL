const resolver = {
    Query: {
        characters: async (root, args, context) => {
            let characters = await context.characters.find();
            let count = 0, pages = 0, pageComplete = true, results = [];
            let min = (args.page - 1) * 20;
            let max = args.page * 20 - 1;
            characters.forEach((char, i) => {
                count++;
                if(i >= min && i <= max) results.push(char);
                if(count % 20 == 0) {
                    pages++;
                    pageComplete = true;
                }else pageComplete = false;
            });
            if (!pageComplete) pages++;
            return {
                info: {
                    next: (args.page + 1),
                    pages,
                    count,
                    prev: (args.page - 1),
                },
                results
            };
        },
        character: async (root, args, context) => {
            let char = await context.characters.find(), res;
            char.forEach(r => {
                if(r._id == args._id) res = r;
            });
            return res;
        },
        getCharacterAleatorio: async (root, args, context) => {
            let characters = await context.characters.find();
            let sorteo = Math.floor(Math.random()* characters.length);
            return characters[sorteo];
        }
    }
}

exports.res = resolver;