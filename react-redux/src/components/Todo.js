import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { todo } = this.props;
    return (
      <div>
        <h1>{todo}</h1>
      </div>
    );
  }
}

export default Todo;
