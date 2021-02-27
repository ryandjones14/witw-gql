const { gql } = require('apollo-server');

const typeDefs = gql`
  type Photo {
    id: ID!
    createdAt: String
    updatedAt: String
    width: Int
    height: Int
    color: String
    blurHash: String
    description: String
    location: Location
    urls: Urls
    user: User
  }

  type Location {
    name: String
    city: String
    country: String
  }

  type Urls {
    raw: String
    full: String
    regular: String
    small: String
    thumb: String
  }

  type User {
    id: ID!
    username: String
    portfolioUrl: String
  }

  type Query {
    photos: [Photo]
    photo(id: ID!): Photo
    user(id: ID!): User
  }
`;

module.exports = typeDefs;
