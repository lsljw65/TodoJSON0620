import { useState } from "react";
import "../css/Item.css";
export default function TodoListItem({
  todo,
  removeTodo: _removeTodo,
  modifyTodo: _modifyTodo,
}) {
  const [editMode, setEditMode] = useState(false);
  const [newEditTitle, setNewEditTitle] = useState(todo.title);
  const readMode = !editMode;
  function removeTodo() {
    _removeTodo(todo.id);
  }

  function enableEditTodo() {
    setEditMode(true);
    setNewEditTitle(todo.title);
  }
  function commitEdit() {
    if (newEditTitle.trim().length === 0) return;

    _modifyTodo(todo.id, newEditTitle.trim());
    setEditMode(false);
  }
  function cancelEdit() {
    setEditMode(false);
  }
  function Change(e) {
    setNewEditTitle(e.target.value);
  }
  return (
    <li className="li">
      <span className="span">{todo.id}</span>
      {readMode ? (
        <span className="span">
          {todo.title}
          <button onClick={enableEditTodo}>수정</button>
        </span>
      ) : (
        <span className="">
          <input
            type="text"
            placeholder="할 일"
            value={newEditTitle}
            onChange={Change}
          />
          <button className="span" onClick={commitEdit}>
            수정 완료
          </button>
          <button className="span" onClick={cancelEdit}>
            수정 취소
          </button>
        </span>
      )}

      <button className="span" onClick={removeTodo}>
        삭제
      </button>
    </li>
  );
}
