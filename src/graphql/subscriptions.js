/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLibrary = /* GraphQL */ `
  subscription OnCreateLibrary($filter: ModelSubscriptionLibraryFilterInput) {
    onCreateLibrary(filter: $filter) {
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
export const onUpdateLibrary = /* GraphQL */ `
  subscription OnUpdateLibrary($filter: ModelSubscriptionLibraryFilterInput) {
    onUpdateLibrary(filter: $filter) {
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
export const onDeleteLibrary = /* GraphQL */ `
  subscription OnDeleteLibrary($filter: ModelSubscriptionLibraryFilterInput) {
    onDeleteLibrary(filter: $filter) {
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
export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook($filter: ModelSubscriptionBookFilterInput) {
    onCreateBook(filter: $filter) {
      id
      title
      createdAt
      updatedAt
      libraryBooksId
      __typename
    }
  }
`;
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook($filter: ModelSubscriptionBookFilterInput) {
    onUpdateBook(filter: $filter) {
      id
      title
      createdAt
      updatedAt
      libraryBooksId
      __typename
    }
  }
`;
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook($filter: ModelSubscriptionBookFilterInput) {
    onDeleteBook(filter: $filter) {
      id
      title
      createdAt
      updatedAt
      libraryBooksId
      __typename
    }
  }
`;
