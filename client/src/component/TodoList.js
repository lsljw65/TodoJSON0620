import TodoListItem from "./TodoListItem";
export default function TodoList({ todos, removeTodo, modifyTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          modifyTodo={modifyTodo}
        />
      ))}
    </ul>
  );
}
