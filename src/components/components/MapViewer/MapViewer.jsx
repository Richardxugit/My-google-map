import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import styles from "./MapViewer.module.scss";
import bikeData from "../../../data/bike_rent_melboune.json";

export class MapViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: bikeData,
      selectedLoc: "",
    };
  }

  displayInfoWindow() {}

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={13}
        className={styles.wrapper}
        initialCenter={{ lat: -37.840935, lng: 144.946457 }}
      >
        {this.state.stores.map((store, index) => (
          <Marker
            key={index}
            id={store.station_id}
            position={{
              lat: store.lat,
              lng: store.lon,
            }}
            onClick={() => {
              this.setState({ selectedLoc: store });
            }}
          />
        ))}
        {console.log(this.state.selectedLoc)}
        <InfoWindow
          position={{
            lat: this.state.selectedLoc.lat,
            lng: this.state.selectedLoc.lon,
          }}
          onCloseClick={() => {
            this.setState({ selectedLoc: "" });
          }}
        >
          {console.log(this.state.selectedLoc)}
          <div>{this.state.selectedLoc.name}</div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAWNmsok4fRuSa3rCI6UO2M-fnY4MpAkz0",
})(MapViewer);
