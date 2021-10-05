import React from 'react'
import { Dropdown } from 'react-bootstrap'

const Todo = ({ todoId, title, description, dueDate, status, readableStatus }) => {
  const today = new Date()
  const dueWhen = new Date(dueDate)

  const editMenu = (
    <Dropdown>
      <Dropdown.Toggle variant="success-outline" id={`edit-${todoId}`}>
        <i className="far fa-edit" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item variant="danger" href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )

  return (
    <div className="todo">
      <div className="todo-top">
        <h2 className='todo-title'>{title}</h2>
        { editMenu }
      </div>
      <p className='todo-description'>{description}</p>
      <div className="todo-details">
        <p className={today >= dueWhen && status !== 'COMPLETE' ? `due` : `${status}`}>Due: {dueDate}</p>
        <p className={`status ${status}`}>{readableStatus}</p>
      </div>
    </div>
  )
}

export default Todo