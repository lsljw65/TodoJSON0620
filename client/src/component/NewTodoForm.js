import { useState } from "react";
import "../css/NewTodoForm.css";
export default function NewTodoForm({ todoStatus }) {
  const [newTodoTitle, setNewTodoTitle] = useState("");

  function onChange(e) {
    console.log(e.target.value);
    setNewTodoTitle(e.target.value);
  }

  function addTodo() {
    if (newTodoTitle.trim().length === 0) return;

    const title = newTodoTitle.trim();
    todoStatus.addTodo(title);
    setNewTodoTitle("");
  }

  return (
    <div className="newform">
      <input
        type="text"
        placeholder="할 일을 입력해주세요."
        className="input"
        value={newTodoTitle}
        onChange={onChange}
      />
      <button type="button" className="bt" onClick={addTodo}>
        추가
      </button>
    </div>
  );
}
