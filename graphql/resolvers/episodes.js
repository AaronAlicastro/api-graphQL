const resolver = {
    Query: {
        episodes: async (root, args, context) => {
            let episodes = await context.episodes.find();
            let count = 0, pages = 0, pageComplete = true, results = [];
            let min = (args.page - 1) * 20;
            let max = args.page * 20 - 1;
            episodes.forEach((epi, i) => {
                count++;
                if(i >= min && i <= max) results.push(epi);
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
        episode: async (root, args, context) => {
            let episodes = await context.episodes.find(), res;
            episodes.forEach(r => {
                if(r._id == args._id) res = r;
            });
            return res;
        }
    }
}

exports.res = resolver;