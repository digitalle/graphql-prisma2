import { GraphQLServer } from 'graphql-yoga'

// 5 Scalar types - String. Boolean, Int, Float, ID = discreet values i.e. NOT an array or Object

// type defs

// title, price, release year, rating, in stock

// location = string


// Bio = string sentente

const typeDefs = `
    type Query {
        me: User!
        post: Post!
    }
    
    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }
    
    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!        
    }
`;

// resolvers
const resolvers = {
    Query: {
        me() {
            return {
                id: '123000',
                name: 'mike',
                email: 'mik@op.com'
            }
        },
        post() {
            return {
                id: '12345',
                title: 'go foi it',
                body: 'here is the body',
                published: true
            }
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
