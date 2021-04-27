//PARENT CLASS 

import './App.css';
import Header from "./My components/header"
import { Todos } from "./My components/Todos"
import { Footer } from "./My components/Footer" //We are using the {} to import because the function ijs file isnt returing default function like the header js does
import { AddTodo } from "./My components/addTodo"
import { About } from "./My components/About"
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") == null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    console.log("Deleting ", todo)
    //Deleting this way will not worlk in react...instead use react instead
    // let index= todos.indexOf(todo);
    // todos.splice(index,1);
    //Deleting whent the delte button is clicked
    setTodos(todos.filter((e) => {
      return e !== todo
    }))
    let todoValue = localStorage.getItem("todos");
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodo = (title, desc) => {
    console.log(title, desc)
    let no;
    if (todos.length === 0) {
      no = 0;
    }
    else {
      no = todos[todos.length - 1].no + 1;
    }
    const myTodo = {
      no: no,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



  // Using react Hooks to delete and update the notes

  // return (
  //   <>
  //     {/* when returing without any div surround it with ehlep of <> &</> */}
  //     <Header title="MyList" />
  //     <AddTodo addTodo={addTodo} />
  //     <Todos todos={todos} onDelete={onDelete} />
  //     <Footer />
  //   </>
  // );

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}


// here in Todo we are passing the todos and onDelete properties which are defied in the App.js 

export default App;
