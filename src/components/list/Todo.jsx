import React from 'react'

const Todo = ({ title, description,dueDate, status, readableStatus }) => {
  const today = new Date()
  const dueWhen = new Date(dueDate)

  return (
    <div className="todo">
      <h2 className='todo-title'>{title}</h2>
      <p className='todo-description'>{description}</p>
      <div className="todo-details">
        <p className={today >= dueWhen && status !== 'COMPLETE' ? `due` : `${status}`}>Due: {dueDate}</p>
        <h3 className={status}>{readableStatus}</h3>
      </div>
    </div>
  )
}

export default Todo