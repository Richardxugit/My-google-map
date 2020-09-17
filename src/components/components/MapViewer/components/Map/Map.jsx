import React from "react";
import styles from "./Map.module.scss";
import ReactDOMServer from "react-dom/server";
import InfoWindow from "../InfoWindow";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.loadChecker = this.loadChecker.bind(this);
    this.createInfoWindow = this.createInfoWindow.bind(this);
  }

  loadChecker() {
    if (!window.google.maps) {
      setTimeout(this.loadChecker, 100);
      console.log("not loaded yet");
    } else {
      console.log("loaded");
      // the google maps api is ready to use, render the map
      this.renderMap();
    }
  }

  createInfoWindow(map, marker, lat, lng, name) {
    const infoWindow = new window.google.maps.InfoWindow({
      content: "",
      position: { lat: lat, lng: lng },
    });
    infoWindow.close();
    const content = this.renderChildren(name);
    infoWindow.setContent(content);
    infoWindow.open(map, marker);
  }

  renderChildren(name) {
    const children = <InfoWindow name={name} />;
    return ReactDOMServer.renderToString(children);
  }

  renderMap() {
    // create map instance
    const map = new window.google.maps.Map(this.refs.map, this.props.options);
    for (var i = 0; i < this.props.locations.length; i++) {
      const name = this.props.locations[i].name;
      const lat = this.props.locations[i].lat;
      const lng = this.props.locations[i].lon;
      const latLng = new window.google.maps.LatLng(lat, lng);
      const marker = new window.google.maps.Marker({
        position: latLng,
        map: map,
      });
      marker.addListener("click", () => {
        this.createInfoWindow(map, marker, lat, lng, name);
      });
    }
  }

  componentDidMount() {
    this.loadChecker();
  }

  render() {
    return <div className={styles.wrapper} ref="map"></div>;
  }
}

export default Map;
