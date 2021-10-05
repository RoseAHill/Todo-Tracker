import './ListHandler.css'
import React, { useEffect, useState } from 'react'
import {
  fetchTodosByDate as byDate,
  fetchTodosByStatus as byStatus,
  fetchTodosByTitle as byTitle,
  readableStatus
} from '../../services/todoService'
import SortingButtons from './SortingButtons'
import Todo from './Todo'
import ToDoForm from '../form/ToDoForm'

const sortByCallbacks = [byDate, byStatus, byTitle]

const List = ({ todos, setTodos }) => {
  const [sortDirection, setSortDirection] = useState('ASC')
  const [sortByIndex, setSortByIndex] = useState(0)
  
  const fetchTodos = async (direction) => {
    try {
      const todos = await sortByCallbacks[sortByIndex](direction)
      setTodos(todos)
    } catch (err) { console.error('error fetching todos', err) }
  }

  useEffect(() => {
    fetchTodos(sortDirection)
  }, [])

  useEffect(() => {
    fetchTodos(sortDirection)
  }, [sortByIndex, sortDirection])
  
  return (
    <div className="list">
      <SortingButtons setSortByIndex={setSortByIndex} sortDirection={sortDirection} setSortDirection={setSortDirection} />
      <div className="todo-list">
        <ToDoForm todos={todos} setTodos={setTodos} />
        {
          todos.map((todo, index) => (
            <Todo
              key={todo.id || index}
              todoId={todo.id}
              title={todo.title}
              description={todo.description}
              dueDate={todo.dueDate || "not set"}
              status={todo.status || "UNKNOWN"}
              readableStatus={readableStatus[todo.status] || "Unknown"}
            />
          ))
        }
      </div>
    </div>
  )
}

export default List