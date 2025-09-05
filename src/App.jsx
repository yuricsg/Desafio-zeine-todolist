import { useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Extrair dados da tabela",
      category: "Profissional",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Correr ao entardecer",
      category: "Vida pessoal",
      isCompleted: false,
    },
    {
      id: 1,
      text: "Estudar React",
      category: "Acadêmico",
      isCompleted: false,
    }
  ])

  return <div className='app'>
    <h1>To-Do List:</h1>
    <div className="todo-list">
      {
        todos.map((todo) => (
            <div className="todo">
              <div className="content">
                <p>{todo.text}</p>
                <p className="category">({todo.category})</p>
              </div>
              <div>
                <button>Concluir</button>
                <button>Deletar</button>
              </div>
            </div>
        ))
      }
    </div>
  </div>
}

export default App
