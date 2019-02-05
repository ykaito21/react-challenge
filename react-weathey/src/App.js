import React, { Component } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";
import axios from "axios";

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
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`;
    axios
      .get(URL)
      .then(res => res.data)
      .then(data => {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      })
      .catch(err => {
        if (err) {
          console.error("Cannot fetch Weather Data from API, ", err);
        }
      });

    // const api_call = await fetch(
    //   `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`
    // );
    // const data = await api_call.json();
    // if (city && country) {
    //   this.setState({
    //     temperature: data.main.temp,
    //     city: data.name,
    //     country: data.sys.country,
    //     humidity: data.main.humidity,
    //     description: data.weather[0].description,
    //     error: ""
    //   });
    // } else {
    //   this.setState({
    //     temperature: undefined,
    //     city: undefined,
    //     country: undefined,
    //     humidity: undefined,
    //     description: undefined,
    //     error: "please enter the value"
    //   });
    // }
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
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather {...this.state} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
