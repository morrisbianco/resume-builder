const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }
type Contact {
  name: String
  city: String
  state: String
  address: String
  zip: String
  phoneNumber: String
  summary: String
  skills: [String]
}

type Project {
  title: String
  link: String
  bPoints: [String]
  tools: [String]
}

type Experience {
  title: String
  role: String
  date: String
  location: String
  description: String
  keyAchievement: String
}

type Education {
  title: String
  date: String
  bPoints: [String]
  description: String
}

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
