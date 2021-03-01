const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const PhotoAPI = require('./datasources/photo');
const resolvers = require('./resolvers');


const server = new ApolloServer({
  typeDefs,
  dataSources: () => ({
    photoAPI: new PhotoAPI(),
  }),
  resolvers,
});


server.listen().then(() => {
  console.log(`🚀 Server is running!`);
});