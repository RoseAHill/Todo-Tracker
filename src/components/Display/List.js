import React from "react"
import ToDo from "./ToDo"

const List = ({ todos }) => {
  if (todos && todos.length > 0) {
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
    </div>
  )
}

export default List;
