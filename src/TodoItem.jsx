import React from "react";
import { todoListState } from "./state";
import { useSetRecoilState } from "recoil";

function TodoItem({ data }) {
  const setTodoItem = useSetRecoilState(todoListState);

  function handleComplete() {
    if (!data.isDone) {
      setTodoItem((oldTodoList) => {
        return oldTodoList.map((todo) => {
          if (todo.id === data.id) return { ...todo, isDone: true };
          return todo;
        });
      });
    }
  }

  const className = data.isDone ? "todo-item done" : "todo-item";
  const taskTitle = data.isDone ? `${data.content} => done` : data.content;

  return (
    <li onClick={handleComplete} className={className}>
      <data>{taskTitle}</data>
    </li>
  );
}

export default TodoItem;
