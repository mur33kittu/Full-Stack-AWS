const { gql } = require("apollo-server-express");

module.exports = gql`
  type Headers {
    key: Int
    menuHref: String
    menuItem: String
  }

  type Photos {
    path: String
  }

  type Query {
    headers: [Headers]
    photos: [Photos]
    files: [String]
  }
  scalar Upload

  type Mutation {
    uploadFile(file: Upload!): Boolean
  }
`;
