/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLibrary = /* GraphQL */ `
  mutation CreateLibrary(
    $input: CreateLibraryInput!
    $condition: ModelLibraryConditionInput
  ) {
    createLibrary(input: $input, condition: $condition) {
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
export const updateLibrary = /* GraphQL */ `
  mutation UpdateLibrary(
    $input: UpdateLibraryInput!
    $condition: ModelLibraryConditionInput
  ) {
    updateLibrary(input: $input, condition: $condition) {
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
export const deleteLibrary = /* GraphQL */ `
  mutation DeleteLibrary(
    $input: DeleteLibraryInput!
    $condition: ModelLibraryConditionInput
  ) {
    deleteLibrary(input: $input, condition: $condition) {
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
export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
      id
      title
      library {
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
      createdAt
      updatedAt
      libraryBooksId
      __typename
    }
  }
`;
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
      id
      title
      library {
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
      createdAt
      updatedAt
      libraryBooksId
      __typename
    }
  }
`;
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
      id
      title
      library {
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
      createdAt
      updatedAt
      libraryBooksId
      __typename
    }
  }
`;
