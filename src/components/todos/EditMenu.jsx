import React from 'react'
import { Dropdown } from 'react-bootstrap'

const EditMenu = ({ todoId, deleteRefresh }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success-outline" id={`edit-${todoId}`}>
        <i className="far fa-edit" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="edit-menu">
        <Dropdown.Item>Complete</Dropdown.Item>
        <Dropdown.Item>In-progress</Dropdown.Item>
        <Dropdown.Item>On Hold</Dropdown.Item>
        <Dropdown.Item onClick={() => deleteRefresh(todoId)} className="delete-color">Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default EditMenu