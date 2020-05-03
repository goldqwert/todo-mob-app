import React, { useReducer } from "react";
import { TodoContext } from "./todoConetxt";
import { todoReducer } from "./todoReducer";

export const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ todos: state.todos }}>
      {children}
    </TodoContext.Provider>
  );
};
