import './ToDoForm.css'
import React, { useState } from 'react'
import {
  sendTodo,
  initialState,
} from '../../services/todoService'

const ToDoForm = ({ todos, setTodos }) => {
  const [formState, setFormState] = useState(initialState)

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
    <form>
      <h2>Add Task</h2>
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
    </form>
  )
}

export default ToDoForm