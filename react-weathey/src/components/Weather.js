import React, { Component } from "react";

export class Weather extends Component {
  render() {
    const {
      temperature,
      city,
      country,
      humidity,
      description,
      error
    } = this.props;
    return (
      <div>
        {temperature}
        {city}
        {country}
        {humidity}
        {description}
        {error}
      </div>
    );
  }
}

export default Weather;
