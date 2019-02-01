import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../tourData";

class TourList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: tourData
    };
  }
  removeTours = id => {
    const sortedTours = this.state.tours.filter(tour => tour.id !== id);
    this.setState({
      tours: sortedTours
    });
  };
  render() {
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map(tour => {
          return (
            <Tour
              key={tour.id}
              tour={tour}
              removeTours={() => this.removeTours(tour.id)}
            />
          );
        })}
      </section>
    );
  }
}

export default TourList;
