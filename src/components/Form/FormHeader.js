import React, { useState } from 'react'
import Form from './Form'

const initialState = {
  title: '',
  description: '',
  status: 'NOTSTARTED',
  dueDate: new Date(),
}

const FormHeader = () => {
  const [dueDate, setDueDate] = useState(new Date())
  const [todoData, setTodoData] = useState(initialState)

  const setInput = (key, value) => {
    setTodoData({ ...todoData, [key]: value })
  }

  return (
    <div className="form-wrapper">
      <Form
        todoData={todoData}
        setInput={setInput}
        dueDate={dueDate}
        setDueDate={setDueDate}
      />
    </div>
  )
}

export default FormHeader