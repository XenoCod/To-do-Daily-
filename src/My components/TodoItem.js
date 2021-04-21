//CHILD CLASS OF TODOS components

import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div className="my-3">
           <h4>{todo.title}</h4>
           <p>{todo.desc}</p>
           <buttton className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</buttton>
        </div>
        <hr/>
        </>

        //Here we are finally excuetiong the onClick property thatis being obtained from the parent classe
    )
}
