//Child component of App.js WOrks when all the components are empty and user need to add a nwww list

import React from 'react'
import { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle]= useState("");
    const [desc, setDesc]= useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="container my-3"> 
            <h3 className="text-center my-3">Add your taks</h3>
            <form className="w-50 " onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="title" aria-describedby="emailHelp"/>
                    
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                        <input type="text" className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc"/>
                    </div>
                        
                            <button type="submit" className="btn btn-success" >Add</button>
            </form>

        </div>
    )
}

