import { useState } from 'react'

import './App.css'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Filter from './components/Filter'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Extrair dados da tabela",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Correr ao entardecer",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      isCompleted: false,
    }
  ])

  const [filter, setFilter] = useState('All');

  const addTodo = (text) => {
    const newTodo = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        isCompleted: false,
      },
    ]

    setTodos(newTodo)
  }

  const removeTodo = (id) => {
    const newTodo = [...todos]
    const filteredTodos = newTodo.filter(todo =>
      todo.id !== id ? todo : null
    )
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodo = [...todos]
    newTodo.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodo)
  }

  return (
    <div className='app'>
      <h1>To-Do List:</h1>
      <Filter filter={filter} setFilter={setFilter} />
      <div className="todo-list">
        {
          todos
            .filter((todo) =>
              filter === 'All'
                ? true 
                : filter === 'Completed' 
                ? todo.isCompleted 
                : !todo.isCompleted)
            .map((todo) => (
              <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
            ))
        }
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
