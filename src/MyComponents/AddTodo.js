import React, { useState } from 'react';
export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        if (!title || !desc){
            alert("Title and Description cannot be blank")
        }
        else{
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className= "container" >
            <h3 className= "text-center">Add a Todo here</h3>
            <form className= "px-5" onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value = {title} onChange = {(e) => {setTitle(e.target.value)}} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange = {(e) => {setDesc(e.target.value)}} className="form-control"/>
                </div>
                <button type="submit" className="btn btn-success">Add Todo</button>
            </form>
        </div>
    )
}