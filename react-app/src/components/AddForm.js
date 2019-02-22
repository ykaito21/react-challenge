import React, { Component } from "react";

class AddForm extends Component {
  state = {
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type="submit">add</button>
      </form>
    );
  }
}

export default AddForm;
