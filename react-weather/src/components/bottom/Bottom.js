import React, { Component } from "react";
import Forcastday from "./Forecastday";
import "./Bottom.scss";

export class Bottom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { forecastdays } = this.props;
    return (
      <div className="bottom-container">
        <div className="inner-container">
          {forecastdays &&
            forecastdays.map((day, idx) => {
              return <Forcastday day={day.day} key={idx} />;
            })}
        </div>
      </div>
    );
  }
}

export default Bottom;
