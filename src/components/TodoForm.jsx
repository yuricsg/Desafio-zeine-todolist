import { useState } from 'react'

function TodoForm({ addTodo }) {

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value) return
        addTodo(value)
        setValue('')
    }

    return (
        <div className='todo-form'>
            <h2>Nova tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Título da tarefa'
                    value={value}
                    onChange={(e) =>
                        setValue(e.target.value)}
                />
                <button type='submit'>Criar</button>
            </form>
        </div>
    )
}

export default TodoForm
