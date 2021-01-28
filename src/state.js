import { atom } from "recoil";

const TODO_LIST = "todoListData";

const todoListState = atom({
  key: TODO_LIST,
  default: [],
});

export { todoListState };
