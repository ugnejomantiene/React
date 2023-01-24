import React, { useState, useEffect } from "react";
import SignInForm from "./komponentai/SignInForm";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => setUsers(data.users))
      .catch(err => console.log(err));
  }, []);

  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  
  const completeTodo = index => {
  const newTodos = [...todos];
  newTodos[index].isCompleted = true;
  setTodos(newTodos);
  };
  
  const removeTodo = index => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
  };
  
  const handleLogout = () => {
  setLoggedIn(false);
  };
  
  return (
  <div className="app">
  <SignInForm 
       users={users}
       setLoggedIn={setLoggedIn}
     />
  {loggedIn && (
  <div className="todo-list">
  {todos.map((todo, index) => (
  <Todo
             key={index}
             index={index}
             todo={todo}
             completeTodo={completeTodo}
             removeTodo={removeTodo}
           />
  ))}
  <TodoForm addTodo={addTodo} />
  <button onClick={handleLogout}>Logout</button>
  </div>
  )}
  </div>
  );
  }