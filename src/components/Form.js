import React from 'react'

const Form = ({ todoData, setInput }) => {
  return (
    <form>
      <input
        type="text"
        name="title"
        placeholder="Title"
        required
        value={todoData.title}
        onChange={e => setInput('title', e.target.value)}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={todoData.description}
        onChange={e => setInput('description', e.target.value)}
      />
      <input
        type="date"
        name="dueDate"
        value={todoData.dueDate}
        onChange={(e) => setInput('dueDate', e.target.value)}
      />
      <select name="status" onChange={e => setInput('status', e.target.value)}>
        <option selected value="NOTSTARTED">Not Started</option>
        <option value="INPROGRESS">In Progress</option>
        <option value="COMPLETE">Complete</option>
        <option value="ONHOLD">On Hold</option>
      </select>
      <button type="submit">Create Todo</button>
    </form>
  )
}

export default Form