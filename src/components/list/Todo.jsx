import React from 'react'
import { Dropdown } from 'react-bootstrap'
import EditMenu from '../todos/EditMenu'

const Todo = ({ todoId, title, description, dueDate, status, readableStatus }) => {
  const today = new Date()
  const dueWhen = new Date(dueDate)

  return (
    <div className="todo">
      <div className="todo-top">
        <h2 className='todo-title'>{title}</h2>
        <EditMenu todoId={todoId} />
      </div>
      <p className='todo-description'>{description}</p>
      <div className={today >= dueWhen && status !== 'COMPLETE' ? `todo-details due` : `todo-details`}>
        <p>Due: {dueDate}</p>
        <p className={`status ${status}`}>{readableStatus}</p>
      </div>
    </div>
  )
}

export default Todo