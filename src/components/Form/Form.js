import React from 'react'

const Form = ({ todoForm, setInput, submitTodo }) => {
  return (
    <form onSubmit={submitTodo}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        required
        value={todoForm.title}
        onChange={e => setInput('title', e.target.value)}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={todoForm.description}
        onChange={e => setInput('description', e.target.value)}
      />
      <input
        type="date"
        name="dueDate"
        value={todoForm.dueDate}
        onChange={(e) => setInput('dueDate', e.target.value)}
      />
      <select defaultValue="NOTSTARTED" name="status" onChange={e => setInput('status', e.target.value)}>
        <option value="NOTSTARTED">Not Started</option>
        <option value="INPROGRESS">In Progress</option>
        <option value="COMPLETE">Complete</option>
        <option value="ONHOLD">On Hold</option>
      </select>
      <button type="submit">Create Todo</button>
    </form>
  )
}

export default Form