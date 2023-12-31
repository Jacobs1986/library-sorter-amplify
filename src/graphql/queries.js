/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLibrary = /* GraphQL */ `
  query GetLibrary($id: ID!) {
    getLibrary(id: $id) {
      id
      name
      Books {
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
  query ListAllLibs {
    listLibraries {
      items {
        id
        name
        updatedAt
        createdAt
        Books {
          items {
            title
            cover
            id
            isbn
            author
          }
        }
      }
    }
  }
`;
export const getBooks = /* GraphQL */ `
  query GetBooks($id: ID!) {
    getBooks(id: $id) {
      acquiredFrom
      acquisitionCost
      acquisitionDate
      additionalNotes
      author
      collectorInfo
      condition
      cover
      createdAt
      description
      dustJacket
      edition
      id
      isbn
      jacketCondition
      libraryID
      printing
      pubDate
      publisher
      title
      updatedAt
      __typename
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBooksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        libraryID
        title
        author
        cover
        isbn
        pubDate
        numOfPages
        synopsis
        collectorItem
        edition
        printing
        dustJacket
        condition
        damage
        aquisitionDate
        acquiredFrom
        aquisitionCost
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const booksByLibraryID = /* GraphQL */ `
  query BooksByLibraryID(
    $libraryID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBooksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    booksByLibraryID(
      libraryID: $libraryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        libraryID
        title
        author
        cover
        isbn
        pubDate
        numOfPages
        synopsis
        collectorItem
        edition
        printing
        dustJacket
        condition
        damage
        aquisitionDate
        acquiredFrom
        aquisitionCost
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
