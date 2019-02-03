import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { item, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{item.title}</h6>
        <div className="todo-icon">
          <span
            className="mx-2 text-success"
            style={{ cursor: "pointer" }}
            onClick={handleEdit}
          >
            <i className="fas fa-pen" />
          </span>
          <span
            className="mx-2 text-danger"
            style={{ cursor: "pointer" }}
            onClick={handleDelete}
          >
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
