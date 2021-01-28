import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "./state";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem data={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
