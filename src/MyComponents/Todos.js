import React from 'react'
import {TodoItem} from "./TodoItem";
export const Todos = (props) => {
    return (
        <div className= "container py-3 text-center">
            <h3 className = "text-center">Here goes Todos List!! 😏</h3>
            {props.todos.length ===0? <h4> "All work done 🔥. Great Job 🙂"</h4>: 
            props.todos.map((todo)=>{
                return (
                    <>
                <TodoItem todo = {todo} key = {todo.sno} onDelete = {props.onDelete}/> <hr/>
                </>
                )
            })
        }
        </div>
    )
}
