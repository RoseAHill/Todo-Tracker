import React from 'react'
import { Dropdown } from 'react-bootstrap'

const EditMenu = ({ todoId, deleteRefresh, changeStatus }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success-outline" id={`edit-${todoId}`}>
        <i className="far fa-edit" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="edit-menu">
        <Dropdown.Item onClick={() => changeStatus(todoId, "COMPLETE")}>Complete</Dropdown.Item>
        <Dropdown.Item onClick={() => changeStatus(todoId, "INPROGRESS")}>In-progress</Dropdown.Item>
        <Dropdown.Item onClick={() => changeStatus(todoId, "ONHOLD")}>On Hold</Dropdown.Item>
        <Dropdown.Item onClick={() => deleteRefresh(todoId)} className="delete-color">Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default EditMenu