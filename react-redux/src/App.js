import React, { Component } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

class App extends Component {
  state = {
    todoList: [],
    todo: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      todoList: [...this.state.todoList, this.state.todo]
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <TodoList todoList={this.state.todoList} />
        <Form
          todo={this.state.todo}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
