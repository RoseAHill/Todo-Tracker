import { API, graphqlOperation } from 'aws-amplify'
import { createTodo, deleteTodo, updateTodo } from '../graphql/mutations'
import { todosByDate, todosByStatus, todosByTitle } from '../graphql/queries'

export const initialState = {
  type: 'Todo',
  title: '',
  description: '',
  status: 'NOTSTARTED',
  dueDate: '',
}

export const readableStatus = {
  "NOTSTARTED": "Not Started",
  "INPROGRESS": "In-progress",
  "COMPLETE": "Complete",
  "ONHOLD": "On Hold"
}

export const fetchTodosByDate = async (direction) => {
  try {
    const todoData = await API.graphql(graphqlOperation(todosByDate, {type: "Todo", sortDirection: direction}))
    return await todoData.data.todosByDate.items
  } catch (err) {
    console.error('service error getting todos by date:', err)
  }
}

export const fetchTodosByStatus = async (direction) => {
  try {
    const todoData = await API.graphql(graphqlOperation(todosByStatus, {type: "Todo", sortDirection: direction}))
    return await todoData.data.todosByStatus.items
  } catch (err) {
    console.error('service error getting todos by status:', err)
  }
}

export const fetchTodosByTitle = async (direction) => {
  try {
    const todoData = await API.graphql(graphqlOperation(todosByTitle, {type: "Todo", sortDirection: direction}))
    const todos = await todoData.data.todosByTitle.items
    const ascTodos = todos.sort((todo1, todo2) =>  todo1.title.toLowerCase().localeCompare(todo2.title.toLowerCase()))
    if (direction === 'DESC') return ascTodos.reverse()
    else return ascTodos
  } catch (err) {
    console.error('service error getting todos by title:', err)
  }
}

export const sendTodo = async (todo) => {
  try {
    await API.graphql(graphqlOperation(createTodo, {input: todo}))
  } catch (err) {
    console.error('service error adding todo:', err)
  }
}

export const removeTodo = async (todoId) => {
  try {
    const todoData = await API.graphql(graphqlOperation(deleteTodo, {input: {id: todoId}}))
    return await todoData.data.deleteTodo.id
  } catch (err) {
    console.error('service error deleting todo', err)
  }
}

export const updateStatus = async (todoId, status) => {
  try {
    const todoData = await API.graphql(graphqlOperation(updateTodo, {input: {id: todoId, status: status}}))
    return await todoData.data.updateTodo
  } catch (err) {
    console.error('service error updating todo status', err)
  }
}