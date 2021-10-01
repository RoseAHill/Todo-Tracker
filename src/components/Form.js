import React, {useState} from 'react'

// Date picker docs: https://mcdatepicker.netlify.app/

const Form = ({ startDate, setStartDate }) => {
  return (
    <form>
      <input
        type="text"
        name="title"
        placeholder="Title"
        required
        value=""
        onChange={e => console.log('title', e.target.value)}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value=""
        onChange={e => console.log('title', e.target.value)}
      />
      <select name="status" onChange={e => console.log('status', e.target.value)}>
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