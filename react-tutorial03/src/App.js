import React, { Component } from "react";
// import PropTypes from "prop-types";
import "./App.css";

// const Person = ({ img, name, age }) => {
//   return (
//     <div>
//       <img src={img} alt="" />
//       <h2>name : {name}</h2>
//       <h2>age : {age}</h2>
//     </div>
//   );
// };

// Person.propTypes = {
//   img: PropTypes.string,
//   name: PropTypes.string,
//   age: PropTypes.number
// };

// class PersonList extends Component {
//   state = {
//     people: [
//       {
//         id: 1,
//         img: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
//         name: "john",
//         age: 24
//       },
//       {
//         id: 2,
//         img: "https://randomuser.me/api/portraits/thumb/men/78.jpg",
//         name: "john",
//         age: 22
//       },
//       {
//         id: 3,
//         img: "https://randomuser.me/api/portraits/thumb/men/13.jpg",
//         name: "john",
//         age: 30
//       },
//       {
//         id: 4,
//         img: "https://randomuser.me/api/portraits/thumb/men/43.jpg",
//         name: "john",
//         age: 68
//       }
//     ]
//   };
//   render() {
//     return (
//       <div>
//         {this.state.people.map(person => {
//           return (
//             <Person
//               key={person.id}
//               img={person.img}
//               name={person.name}
//               age={person.age}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

class ControlledInput extends Component {
  state = {
    text: ""
  };
  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      text: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          name="firstName"
        />
        <button>submit</button>
      </form>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <ControlledInput />
      </div>
    );
  }
}

export default App;
