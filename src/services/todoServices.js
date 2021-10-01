import { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from '../graphql/mutations'
import { listTodos } from '../graphql/queries'

export const fetchTodos = async () => {
  try {
    const todoData = await API.graphql(graphqlOperation(listTodos))
    const todos = todoData.data.listTodos.items
    return todos
  } catch (err) { console.error('error fetching todos')}
}

export const addTodo = async (todoData) => {
  try {
    if (!todoData.name) return
    const todo = { ...todoData }
    await API.graphql(graphqlOperation(createTodo, {input: todo}))
    return todo
  } catch (err) { console.error('error creating todo', err) }
}