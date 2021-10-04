/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      type
      title
      description
      status
      dueDate
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        title
        description
        status
        dueDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const todosByStatus = /* GraphQL */ `
  query TodosByStatus(
    $type: String
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    todosByStatus(
      type: $type
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        title
        description
        status
        dueDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const todosByDate = /* GraphQL */ `
  query TodosByDate(
    $type: String
    $dueDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    todosByDate(
      type: $type
      dueDate: $dueDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        title
        description
        status
        dueDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const todosByTitle = /* GraphQL */ `
  query TodosByTitle(
    $type: String
    $title: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    todosByTitle(
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
        description
        status
        dueDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
