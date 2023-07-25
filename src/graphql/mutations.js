/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
      id
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
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
      id
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
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
      id
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
