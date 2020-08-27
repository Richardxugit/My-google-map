import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import styles from "./MapViewer.module.scss";
import bikeData from "../../../bike_rent_melboune.json";

export class MapViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: bikeData,
      showingInfoWindow: false,
      activeMarker: {},
      selectedLoc: {},
    };
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedLoc: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

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
            onClick={this.onMarkerClick}
            name={store.name}
          />
        ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>{this.state.selectedLoc.name}</div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.React_APP_GOOGLE_KEY,
})(MapViewer);
