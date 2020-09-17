import React from "react";
import Map from "./components/Map";
import bikeData from "../../../bike_rent_melboune.json";

export class MapViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: { lat: -37.817189, lng: 144.967409 },
      zoom: 15,
      locations: bikeData,
    };
  }

  render() {
    console.log(this.state.locations);
    return (
      <Map
        options={{
          center: this.state.center,
          zoom: this.state.zoom,
        }}
        locations={this.state.locations}
      />
    );
  }
}

export default MapViewer;
