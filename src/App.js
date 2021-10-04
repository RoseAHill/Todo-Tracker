/* src/App.js */
import './App.css'
import React, { useEffect, useState } from 'react'
import Amplify from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'
import {
  fetchTodosByDate as byDate,
  fetchTodosByStatus as byStatus,
  fetchTodosByTitle as byTitle,
  sendTodo,
  initialState,
  readableStatus
} from './services/todoService'

import awsExports from "./aws-exports"
Amplify.configure(awsExports)

const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])
  const [sortDirection, setSortDirection] = useState('ASC')
  
  useEffect(() => {
    fetchTodos(byDate, 'ASC')
  }, [])
  
  const setInput = (key, value) => {
    setFormState({ ...formState, [key]: value })
  }
  
  const fetchTodos = async (sortType, direction) => {
    try {
      const todos = await sortType(direction)
      setTodos(todos)
    } catch (err) { console.error('error fetching todos', err) }
  }
  
  const addTodo = async () => {
    try {
      if (!formState.title || !formState.description) return
      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      await sendTodo(todo)
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  
  return (
    <div className='container'>
      <h2>Task Tracker</h2>
      <input
        required
        name="title"
        onChange={event => setInput('title', event.target.value)}
        className='input'
        value={formState.title}
        placeholder="Title"
      />
      <input
        name="description"
        onChange={event => setInput('description', event.target.value)}
        className='input'
        value={formState.description}
        placeholder="Description"
      />
      <input
        required
        type="date"
        name="dueDate"
        className='input'
        onChange={(e) => setInput('dueDate', e.target.value)}
        value={formState.dueDate}
      />
      <select required className='input' defaultValue="NOTSTARTED" name="status" onChange={e => setInput('status', e.target.value)}>
        <option value="NOTSTARTED">Not Started</option>
        <option value="INPROGRESS">In Progress</option>
        <option value="COMPLETE">Complete</option>
        <option value="ONHOLD">On Hold</option>
      </select>
      <button className='button' onClick={() => addTodo()}>Create Todo</button>
      {
        todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index} className='todo'>
            <h2 className='todo-title'>{todo.title}</h2>
            <p className='todo-description'>{todo.description}</p>
            <div className="todo-details">
              <p>Due: {todo.dueDate || "N/A"}</p>
              <h3 className={todo.status}>{todo.status ? readableStatus[todo.status] : "[Not Assigned]"}</h3>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default withAuthenticator(App)