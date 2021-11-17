import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div className="container py-3">
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-primary" onClick = {() =>{onDelete(todo)}} >DONE</button>
        </div>
    )
}
