/* src/App.js */
import './App.css'
import React, { useState } from 'react'
import Amplify from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'
import {
  sendTodo,
  initialState,
} from './services/todoService'

import awsExports from "./aws-exports"
import List from './components/list/ListHandler'
Amplify.configure(awsExports)

const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])
  
  const setInput = (key, value) => {
    setFormState({ ...formState, [key]: value })
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
    <div className='content'>
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
      <List todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default withAuthenticator(App)