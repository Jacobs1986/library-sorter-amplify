/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      type
      title
      author
      publisher
      isbn
      pubDate
      numOfPages
      synopsis
      cover
      collectorInfo
      edition
      printing
      dustJacket
      bookCondition
      bookDamage
      acquisitionDate
      acquiredFrom
      aquiredCost
      createdAt
      updatedAt
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
        type
        title
        author
        publisher
        isbn
        pubDate
        numOfPages
        synopsis
        cover
        collectorInfo
        edition
        printing
        dustJacket
        bookCondition
        bookDamage
        acquisitionDate
        acquiredFrom
        aquiredCost
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listBooksByTitle = /* GraphQL */ `
  query ListBooksByTitle(
    $type: String!
    $title: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooksByTitle(
      type: $type
      title: $title
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        title
        author
        publisher
        isbn
        pubDate
        numOfPages
        synopsis
        cover
        collectorInfo
        edition
        printing
        dustJacket
        bookCondition
        bookDamage
        acquisitionDate
        acquiredFrom
        aquiredCost
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listByTitleASC = /*GraphQL*/`
  query ListBooksASC {
    listBooksByTitle(
      type: "Book", 
      sortDirection: ASC
      ) {
      items {
        id
        title
        cover
      }
    }
  }
`;
