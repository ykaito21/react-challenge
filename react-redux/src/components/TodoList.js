import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    const { todoList } = this.props;
    return (
      <div>
        <ul>
          {todoList.map(todo => {
            return <Todo key={todo} todo={todo} />;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
