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

  type File {
    fileName: String!
    mimeType: String!
    encoding: String!
  }

  type Query {
    headers: [Headers]
    photos: [Photos]
  }
  scalar Upload
  type Mutation {
    singleUpload(file: Upload!): File!,
    singleUploadStream(file: Upload!): File!
  }

`;
