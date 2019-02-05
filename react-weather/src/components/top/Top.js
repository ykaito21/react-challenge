import React, { Component } from "react";
import Weather from "./Weather";
import "./Top.scss";
import { Manager, Reference, Popper } from "react-popper";

export class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectLocationOpen: false
    };
  }

  onToggleSelectLocation = () => {
    this.setState({
      isSelectLocationOpen: !this.state.isSelectLocationOpen
    });
  };

  onLocationNameChange = e => {
    this.setState({
      locationName: e.target.value
    });
  };

  onSelectCity = () => {
    const { locationName } = this.state;
    const { eventEmitter } = this.props;
    eventEmitter.emit("updateWeather", locationName);
    this.setState({ isSelectLocationOpen: false });
  };

  render() {
    const { isSelectLocationOpen } = this.state;
    const { eventEmitter } = this.props;
    return (
      <div className="top-container">
        <div className="title">Weatheapp</div>
        <Weather {...this.props} />
        <Manager>
          <Reference>
            {({ ref }) => (
              <button
                className="btn btn-select-location"
                ref={ref}
                onClick={this.onToggleSelectLocation}
              >
                Select Location
              </button>
            )}
          </Reference>
          <Popper placement="top">
            {({ ref, style, placement, arrowProps }) =>
              isSelectLocationOpen && (
                <div
                  className="popup-container"
                  ref={ref}
                  style={style}
                  data-placement={placement}
                >
                  <div className="form-container">
                    <label htmlFor="location-name">Location Name</label>
                    <input
                      id="location-name"
                      type="text"
                      placeholder="City Name"
                      onChange={this.onLocationNameChange}
                    />
                    <button
                      className="btn btn-select-location"
                      onClick={this.onSelectCity}
                    >
                      Select
                    </button>
                  </div>
                  <div ref={arrowProps.ref} style={arrowProps.style} />
                </div>
              )
            }
          </Popper>
        </Manager>
      </div>
    );
  }
}

export default Top;
