import React from 'react'

const ToDo = ({ title, description, dueDate, status}) => {
  const readableStatus = {
    "NOTSTARTED": "Not Started",
    "INPROGRESS": "In-progress",
    "COMPLETE": "Complete",
    "ONHOLD": "On Hold"
  }
  return (
    <div className="todo-item">
      <h3 className="title">{title}</h3>
      <p className="description">{description || ""}</p>
      <p className="due-date">Due: {dueDate || "Not Provided"}</p>
      <p className="status">{readableStatus[status]}</p>
    </div>
  )
}

export default ToDo