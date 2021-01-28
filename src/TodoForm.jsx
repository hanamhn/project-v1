import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./state";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const getValue = inputValue.trim();
    if (getValue) {
      setTodoList((oldTodoList) => {
        return [
          ...oldTodoList,
          {
            id: Math.random().toString(),
            content: getValue,
            isDone: false,
          },
        ];
      });
      setInputValue("");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={inputValue} onChange={handleChange} />
      <input type="submit" value="Create Todo" />
    </form>
  );
};

export default TodoForm;
