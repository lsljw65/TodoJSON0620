import "./App.css";
import React, { useState } from "react";
import TodoList from "./component/TodoList";
import NewTodoForm from "./component/NewTodoForm";
import { produce } from "immer";

function useTodoStatus() {
  const [todos, setTodos] = useState([]);
  const [lastTodoId, setLastTodoId] = useState(0);

  function addTodo(title) {
    const id = lastTodoId + 1;
    const newTodo = {
      id,
      title,
    };
    // setTodos([...todos, newTodo]);
    setTodos(
      produce(todos, (draft) => {
        draft.push(newTodo);
      })
    );
    setLastTodoId(id);
  }

  function removeTodo(id) {
    // const newTodos = todos.filter((todo) => todo.id !== id);

    // setTodos(newTodos);
    setTodos(
      produce(todos, (draft) => {
        const index = draft.findIndex((todo) => todo.id === id);
        draft.splice(index, 1);
      })
    );
  }

  function modifyTodo(id, title) {
    /* const newTodos = todos.map((todo) =>
      todo.id !== id ? todo : { ...todo, title }
    ); */
    const newTodos = produce(todos, (draft) => {
      const index = draft.findIndex((todo) => todo.id === id);
      draft[index].title = title;
    });

    setTodos(newTodos);
  }

  return {
    todos,
    addTodo,
    removeTodo,
    modifyTodo,
  };
}

function App() {
  const todoStatus = useTodoStatus();
  return (
    <div className="App">
      <h1>Todos</h1>
      <NewTodoForm todoStatus={todoStatus} />
      <hr />
      <TodoList todoStatus={todoStatus} />
    </div>
  );
}

export default App;
