//CHILD CLASS OF APP.js 

import React from 'react'

import {TodoItem} from "./TodoItem"

export const Todos = (props) => {
    let myStyle={
        minHeight:"70vh",
        margin:"50px auto"
    }
    return (
       <div className="container my-3" style={myStyle}>
           <h3 className="text-center my-3">Todo's List</h3>
           {/* Display no todos to display when there are no lis */}
           {props.todos.length===0?"No Todos to display":
           props.todos.map((todo)=>{
               return <TodoItem todo={todo} key={todo.no} onDelete={props.onDelete}/>
           })
           }

       </div>
       //Here in the TodoItem components we are passing the todo property that is given by the app.js and then it is defied a new property onDelete 


    )
}
