import React from 'react'
import { FaCheckCircle, FaTrash } from "react-icons/fa";

const Todo = ({ todo, removeTodo, completeTodo }) => {
    return (
        <div>
            <div className="todo" 
            style={ {textDecoration: todo.isCompleted ? 'line-through' : '' } }>
                <div className="content">
                    <p>{todo.text}</p>
                </div>
                <div className='action-buttons'>
                    <button className='complete-button' onClick={() => completeTodo(todo.id)}>
                        <FaCheckCircle />
                    </button>
                    <button className='remove-button' onClick={() => removeTodo(todo.id)}>
                        <FaTrash />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Todo
