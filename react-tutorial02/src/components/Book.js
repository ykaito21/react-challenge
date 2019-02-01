import React, { Component } from "react";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      showInfo: true
    };
  }

  handleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  render() {
    const { title, img, author } = this.props.info;
    const { filterData } = this.props;
    const checkInfo = info => {
      if (info === true) {
        return (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur minus distinctio vel, ut error libero?
          </p>
        );
      } else {
        return null;
      }
    };

    return (
      <div className="book">
        <h2>Title: {title}</h2>
        <h4>Author: {author}</h4>
        <img src={img} alt="book" />
        <button onClick={filterData}>delete</button>
        <button onClick={this.handleInfo}>show info</button>
        {checkInfo(this.state.showInfo)}
      </div>
    );
  }
}

export default Book;
