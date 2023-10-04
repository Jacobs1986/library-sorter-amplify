/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLibrary = /* GraphQL */ `
  query GetLibrary($id: ID!) {
    getLibrary(id: $id) {
      id
      name
      books {
        items {
          id
          title
          createdAt
          updatedAt
          libraryBooksId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listLibraries = /* GraphQL */ `
  query ListLibraries(
    $filter: ModelLibraryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLibraries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        books {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      title
      createdAt
      updatedAt
      libraryBooksId
      __typename
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        updatedAt
        libraryBooksId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
