import React, { Component } from "react";
import Book from "./Book";
import books from "./Data";

class Booklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books
    };
  }

  filterData = id => {
    const sortedBooks = this.state.books.filter(book => id !== book.id);
    this.setState({
      books: sortedBooks
    });
  };

  render() {
    return (
      <div>
        <h2>Best selling books this week</h2>
        {this.state.books.map(book => (
          <Book
            key={book.id}
            info={book}
            filterData={() => this.filterData(book.id)}
          />
        ))}
      </div>
    );
  }
}

export default Booklist;
