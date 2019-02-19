import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(post);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
