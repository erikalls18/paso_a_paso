import React, { Component } from "react";
import Shelters from "./Shelters";
import "../App.css";

//Home component, its just a title, description and it brings all the Shelters generated from the API

class Home extends Component {
  render() {
    return (
      <div className="main-content home">
        <Shelters />
      </div>
    );
  }
}

export default Home;
