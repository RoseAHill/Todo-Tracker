import React, { useState, useEffect } from 'react'
import './App.css';
import FormHeader from './components/Form/FormHeader'
import List from './components/Display/List'

// api calls are stored in a service file
import { getTodoList } from "./services/todoServices"

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todoList = await getTodoList()
        setTodos(todoList)
      } catch (err) { console.error("error fetching todos", err) }
    }
    fetchTodos()
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Task Tracker</h1>
      </header>
      <FormHeader todos={todos} setTodos={setTodos} />
      <List todos={todos} />
    </div>
  );
}

export default App;
