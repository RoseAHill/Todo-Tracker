import React from 'react'
import { Badge } from 'react-bootstrap'
import EditMenu from './EditMenu'

const Todo = ({ todoId, title, description, dueDate, status, readableStatus, deleteRefresh, changeStatus }) => {
  const today = new Date()
  const dueWhen = new Date(dueDate)

  return (
    <div className="todo">
      <div className="todo-top">
        <h2 className='todo-title'>{title}</h2>
        {
          todoId ?
            <EditMenu todoId={todoId} deleteRefresh={deleteRefresh} changeStatus={changeStatus} />
          : 
          <Badge bg="secondary">New</Badge>
        }
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