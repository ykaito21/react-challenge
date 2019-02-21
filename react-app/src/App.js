import React, { Component } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: "buy milk"
      },
      {
        id: 2,
        content: "play game"
      }
    ]
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container todo-app">
          <h1 className="center blue-text">Todo's</h1>
          <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
