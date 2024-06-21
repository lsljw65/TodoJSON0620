import { useState } from "react";
export default function useTodoStatus() {
  const [todos, setTodos] = useState([]);
  const [lastTodoId, setLastTodoId] = useState(0);

  function addTodo(title) {
    const id = lastTodoId + 1;
    const newTodo = {
      id,
      title,
    };
    setTodos([...todos, newTodo]);
    setLastTodoId(id);
  }

  function removeTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function modifyTodo(id, title) {
    const newTodos = todos.map((todo) =>
      todo.id !== id ? todo : { ...todo, title }
    );
    setTodos(newTodos);
  }

  return {
    todos,
    addTodo,
    removeTodo,
    modifyTodo,
  };
}
