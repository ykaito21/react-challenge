import React, { Component } from "react";

class Form extends Component {
  render() {
    const { handleChange, handleSubmit, todo } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="todo..."
            onChange={handleChange}
            value={todo}
            name="todo"
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
