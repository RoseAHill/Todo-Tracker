import { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from '../graphql/mutations'
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

export const sendTodo = async (todo) => {
  try {
    await API.graphql(graphqlOperation(createTodo, {input: todo}))
  } catch (err) {
    console.error('service error adding todo:', err)
  }
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
    const todoData = await API.graphql(graphqlOperation(todosByStatus, {sortDirection: direction}))
    return await todoData.data.todosByStatus.items
  } catch (err) {
    console.error('service error getting todos by status:', err)
  }
}

export const fetchTodosByTitle = async (direction) => {
  try {
    const todoData = await API.graphql(graphqlOperation(todosByTitle, {sortDirection: direction}))
    return await todoData.data.todosByTitle.items
  } catch (err) {
    console.error('service error getting todos by status:', err)
  }
}