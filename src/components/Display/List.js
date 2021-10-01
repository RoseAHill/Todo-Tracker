import React, { useEffect, useState } from "react";
import ToDo from "./ToDo";

// api calls are stored in a service file
import { fetchTodos } from "../../services/todoServices";

const List = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(fetchTodos())
  }, [])

  if (todos.length) {
    return (
      <div className="todo-list">
        {
          todos.map((todo, index) => {
            return (
              <ToDo
                key={todo.id || index}
                title={todo.title}
                description={todo.description}
                dueDate={todo.dueDate}
                status={todo.status}
              />
            )
          })
        }
      </div>
    )
  }
  return (
    <div className="empty-list">
      <h3>No todos yet!</h3>
    </div>
  )
}

export default List;
