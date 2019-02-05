import React, { Component } from "react";

export class Forcastday extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { day } = this.props;
    if (!day) return null;
    return (
      <div className="forcastday-container">
        <div className="image">
          <img src={day.condition.icon} />
        </div>
        <div className="text">{day.avgtemp_c}</div>
        <div className="muted-text">{day.condition.text}</div>
      </div>
    );
  }
}

export default Forcastday;
