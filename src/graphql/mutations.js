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

export const updateLibrary = /* GraphQL */ `
  mutation UpdateLibrary(
    $input: UpdateLibraryInput!
    $condition: ModelLibraryConditionInput
  ) {
    updateLibrary(input: $input, condition: $condition) {
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
export const deleteLibrary = /* GraphQL */ `
  mutation DeleteLibrary(
    $input: DeleteLibraryInput!
    $condition: ModelLibraryConditionInput
  ) {
    deleteLibrary(input: $input, condition: $condition) {
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
export const createBooks = /* GraphQL */ `
  mutation CreateBooks(
    $input: CreateBooksInput!
    $condition: ModelBooksConditionInput
  ) {
    createBooks(input: $input, condition: $condition) {
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
export const updateBooks = /* GraphQL */ `
  mutation UpdateBooks(
    $input: UpdateBooksInput!
    $condition: ModelBooksConditionInput
  ) {
    updateBooks(input: $input, condition: $condition) {
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
export const deleteBooks = /* GraphQL */ `
  mutation DeleteBooks(
    $input: DeleteBooksInput!
    $condition: ModelBooksConditionInput
  ) {
    deleteBooks(input: $input, condition: $condition) {
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
