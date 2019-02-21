import React from "react";

function TodoList({ todos, deleteTodo }) {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
          <button type="click" onClick={() => deleteTodo(todo.id)}>
            X
          </button>
        </div>
      );
    })
  ) : (
    <p className="center">you have no todo</p>
  );
  return <div className="todos collection">{todoList}</div>;
}

export default TodoList;
