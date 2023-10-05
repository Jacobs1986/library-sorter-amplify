/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLibrary = /* GraphQL */ `
  subscription OnCreateLibrary($filter: ModelSubscriptionLibraryFilterInput) {
    onCreateLibrary(filter: $filter) {
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
export const onUpdateLibrary = /* GraphQL */ `
  subscription OnUpdateLibrary($filter: ModelSubscriptionLibraryFilterInput) {
    onUpdateLibrary(filter: $filter) {
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
export const onDeleteLibrary = /* GraphQL */ `
  subscription OnDeleteLibrary($filter: ModelSubscriptionLibraryFilterInput) {
    onDeleteLibrary(filter: $filter) {
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
export const onCreateBooks = /* GraphQL */ `
  subscription OnCreateBooks($filter: ModelSubscriptionBooksFilterInput) {
    onCreateBooks(filter: $filter) {
      id
      libraryID
      title
      authorFirstName
      authorLastName
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
  }
`;
export const onUpdateBooks = /* GraphQL */ `
  subscription OnUpdateBooks($filter: ModelSubscriptionBooksFilterInput) {
    onUpdateBooks(filter: $filter) {
      id
      libraryID
      title
      authorFirstName
      authorLastName
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
  }
`;
export const onDeleteBooks = /* GraphQL */ `
  subscription OnDeleteBooks($filter: ModelSubscriptionBooksFilterInput) {
    onDeleteBooks(filter: $filter) {
      id
      libraryID
      title
      authorFirstName
      authorLastName
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
  }
`;
