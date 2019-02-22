import React, { Component } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddForm";
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

  addTodo = todo => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    });
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
          <AddTodo addTodo={this.addTodo} />
          <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
