import { GraphQLServer } from 'graphql-yoga'

// type defs

const typeDefs = `
    type Query {
        hello: String!
    }
`;

// resolvers
const resolvers = {
    Query: {
        hello() {
            return 'this is a query'
        }
    }
};

const server = new GraphQLServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});


server.start( () => {
    console.log("is up");
});
