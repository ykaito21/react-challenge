import React, { Component } from "react";
import Top from "./components/top/Top";
import Bottom from "./components/bottom/Bottom";
import axios from "axios";

import "./sass/App.scss";

const WEATHER_KEY = "6f8fdbc4d5f84472b34140636190402";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "London",
      numForcastDays: 4,
      isLoading: true,
      loadingText: "Loading"
    };
  }
  updateWeather() {
    const { cityName, numForcastDays } = this.state;
    const URL = `https://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}&q=${cityName}&days=${numForcastDays}`;
    axios
      .get(URL)
      .then(res => res.data)
      .then(data => {
        this.setState({
          isLoading: false,
          temp_c: data.current.temp_c,
          isDay: data.current.is_day,
          text: data.current.condition.text,
          iconURL: data.current.condition.icon,
          forecastdays: data.forecast.forecastday
        });
      })
      .catch(err => {
        if (err) {
          console.error("Cannot fetch Weather Data from API, ", err);
        }
      });
  }

  componentDidMount() {
    const { eventEmitter } = this.props;
    this.updateWeather();
    eventEmitter.on("updateWeather", data => {
      this.setState({ cityName: data }, () => this.updateWeather());
    });

    // const stopper = this.state.loadingText + "...";
    // this.interval = window.setInterval(() => {
    //   console.log("running");

    //   this.state.loadingText === stopper
    //     ? this.setState({
    //         loadingText: "Loading"
    //       })
    //     : this.setState(current => {
    //         return {
    //           loadingText: current.loadingText + "."
    //         };
    //       });
    // }, 300);
  }

  // componentWillUnmount() {
  //   if (this.state.isLoading !== true) {
  //     window.clearInterval(this.interval);
  //   }
  // }

  render() {
    const {
      isLoading,
      loadingText,
      cityName,
      temp_c,
      isDay,
      text,
      iconURL,
      forecastdays
    } = this.state;
    return (
      <div className="app-container">
        {isLoading && <h3>{loadingText}</h3>}
        {!isLoading && (
          <div className="main-container">
            <div className="top-section">
              <Top
                location={cityName}
                temp_c={temp_c}
                isDay={isDay}
                text={text}
                iconURL={iconURL}
                eventEmitter={this.props.eventEmitter}
              />
            </div>

            <div className="bottom-section">
              <Bottom forecastdays={forecastdays} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
