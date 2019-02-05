import React, { Component } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

import "./App.css";

const APIKEY = "6bb98cabea90a1b777aa5860d442ad87";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.city.value;
    const country = e.target.country.value;

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`
    );
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "please enter the value"
      });
    }
  };
  render() {
    // const {
    //   temperature,
    //   city,
    //   country,
    //   humidity,
    //   description,
    //   error
    // } = this.state;
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather {...this.state} />
      </div>
    );
  }
}

export default App;
