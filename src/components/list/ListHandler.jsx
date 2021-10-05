import './ListHandler.css'
import React, { useEffect, useState } from 'react'
import {
  fetchTodosByDate as byDate,
  fetchTodosByStatus as byStatus,
  fetchTodosByTitle as byTitle,
  readableStatus,
  removeTodo,
  updateStatus,
} from '../../services/todoService'
import Todo from '../todos/Todo'
import ToDoForm from '../form/ToDoForm'
import BottomButtons from '../menu/BottomButtons'

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

  const deleteRefresh = async (id) => {
    const deletedTodo = await removeTodo(id)
    const newTodos = todos.filter(todo => todo.id !== deletedTodo)
    setTodos(newTodos)
  }

  const changeStatus = async (id, status) => {
    const updatedTodo = await updateStatus(id, status)
    const newTodos = todos.map(todo => todo.id !== id ? todo : updatedTodo)
    setTodos(newTodos)
  }

  useEffect(() => {
    fetchTodos(sortDirection)
  }, [])

  useEffect(() => {
    fetchTodos(sortDirection)
  }, [sortByIndex, sortDirection])

  return (
    <>
    <div className="list">
      <div className="todo-list">
        <ToDoForm todos={todos} setTodos={setTodos} />
        {
          todos.map((todo, index) => (
            <Todo
              deleteRefresh={deleteRefresh}
              changeStatus={changeStatus}
              key={todo.id || index}
              todoId={todo.id}
              title={todo.title}
              description={todo.description}
              dueDate={todo.dueDate || "not set"}
              status={todo.status || "UNKNOWN"}
              readableStatus={readableStatus[todo.status] || "Unknown"}
              setSortDirection={setSortDirection}
            />
          ))
        }
      </div>
    </div>
    <BottomButtons setSortByIndex={setSortByIndex} sortDirection={sortDirection} setSortDirection={setSortDirection} />
    </>
  )
}

export default List