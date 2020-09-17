import React from "react";
// import ReactDOMServer from "react-dom/server";

class InfoWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>{this.props.name}</div>;
  }
}

export default InfoWindow;
