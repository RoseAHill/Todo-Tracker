import React, { useState } from 'react'
import Form from './Form'

// api calls are stored in a service file
import { addTodo } from "../../services/todoServices"

// The default empty text for the form
const initialState = {
  title: '',
  description: '',
  status: 'NOTSTARTED',
  dueDate: '',
}

const FormHeader = ({ todos, setTodos }) => {
  const [todoForm, setTodoForm] = useState(initialState)

  // setting the corresponding field with the new changed data
  const setInput = (key, value) => {
    setTodoForm({ ...todoForm, [key]: value })
  }

  // uses the addTodo from the api services to add the todo to the database
  const submitTodo = (e) => {
    e.preventDefault()
    try {
      addTodo(todoForm)
    } catch (err) { console.error('error submitting todo', err) }
  }

  return (
    <div className="form-wrapper">
      <Form
        todoForm={todoForm}
        setInput={setInput}
        submitTodo={submitTodo}
      />
    </div>
  )
}

export default FormHeader