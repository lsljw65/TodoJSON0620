import TodoListItem from "./TodoListItem";
export default function TodoList({ todoStatus }) {
  return (
    <ul>
      {todoStatus.todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} todoStatus={todoStatus} />
      ))}
    </ul>
  );
}
