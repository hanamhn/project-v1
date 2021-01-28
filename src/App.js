import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div className="todo-app">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
