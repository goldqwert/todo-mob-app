import React, { useReducer, useContext } from "react";
import { TodoContext } from "./todoContext";
import { todoReducer } from "./todoReducer";
import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  SHOW_LOADER,
  CLEAR_ERROR,
  SHOW_ERROR,
  GET_TODOS,
} from "../types";
import { ScreenContext } from "../screen/screenContext";
import { Alert } from "react-native";

export const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
    loading: false,
    error: null,
  };
  const { changeScreen } = useContext(ScreenContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = async (title) => {
    const res = await fetch(
      `https://rn-todo-app-f5f57.firebaseio.com/todos.json`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      }
    );
    const data = await res.json();

    dispatch({ type: ADD_TODO, id: data.name, title });
  };

  const removeTodo = (id) => {
    const todo = state.todos.find((t) => t.id === id);
    Alert.alert(
      "Удаление элемента",
      `Вы уверены, что хотите удалить "${todo.title}"?`,
      [
        {
          text: "Отмена",
          style: "cancel",
        },
        {
          text: "Удалить",
          style: "destructive",
          onPress: async () => {
            showLoader();
            clearError();
            try {
              const res = await fetch(
                `https://rn-todo-app-f5f57.firebaseio.com/todos/${id}.json`,
                {
                  method: "DELETE",
                  headers: { "Content-Type": "application/json" },
                }
              );
              changeScreen(null);
              dispatch({ type: REMOVE_TODO, id });
            } catch (error) {
              showError("Неизвестная ошибка!");
            } finally {
              showLoader();
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  const getTodos = async () => {
    showLoader();
    clearError();
    try {
      const res = await fetch(
        `https://rn-todo-app-f5f57.firebaseio.com/todos.json`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
      const todos = Object.keys(data).map((key) => ({ ...data[key], id: key }));
      dispatch({ type: GET_TODOS, todos });
    } catch (error) {
      // showError("Неизвестная ошибка!");
    } finally {
      showLoader();
    }
  };

  const updateTodo = async (id, title) => {
    showLoader();
    clearError();
    try {
      const res = await fetch(
        `https://rn-todo-app-f5f57.firebaseio.com/todos/${id}.json`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title }),
        }
      );
      dispatch({ type: UPDATE_TODO, id, title });
    } catch (error) {
      showError("Неизвестная ошибка!");
    } finally {
      showLoader();
    }
  };

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const showError = (error) => dispatch({ type: SHOW_ERROR, error });

  const clearError = () => dispatch({ type: CLEAR_ERROR });

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        loading: state.loading,
        error: state.error,
        addTodo,
        removeTodo,
        updateTodo,
        getTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
