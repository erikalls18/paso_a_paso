import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import "../Shelters.css"
import Header from "./Header";
import ShelterFilter from "./ShelterFilter";
import axios from "axios";
const API_URL = "/api/facility";

function Shelters() {
  const [shelter, setShelter] = useState([]);
  const [filter, setFilter] = useState("");

  //fetches the data from the API, it maps it to create an array of objects, they are displayed in form of cards
  useEffect(() => {
    document.title = "Shelters in BC";

    axios
      .get(API_URL)
      .then((res) => res.data)
      .then((data) => setShelter(data));
  }, []);

  //filter the data based on the current filter
  const filteredData = shelter.filter(
    (item) =>
      item.geo_local_area?.toLowerCase().includes(filter.toLowerCase()) ||
      item.facility?.toLowerCase().includes(filter.toLowerCase())
  );

  //it return each card
  return (
    <div className="shelter-cards">
      <Header />
      <NavLink to="/shelterform" className="link-info">
        <button type="button" id="btn" className="btn btn-primary">
          Add Shelter
        </button>
      </NavLink>
      <ShelterFilter setFilter={setFilter} />
      <div className="container-shelters">
        {filteredData.map((item) => (
          <div
            id="shelter-card"
            className="shelter-card card border border-5 rounded-start"
          >
            <div
              id="card-header"
              className="card-header card-title"
              style={{ fontWeight: "bold" }}
            >
              <div className="shelter-name-logo">
                <img
                  src="/images/home-heart.png"
                  alt="Logo"
                  width={25}
                  height={25}
                />
              </div>
              <p className="shelter-name-title">Area: {item.geo_local_area}</p>
            </div>
            <div className="card-body">
              <h5 className="card-text">{item.facility}</h5>
              <p className="card-text">Phone: {item.phone}</p>
              <p className="card-text">Meals : {item.meals}</p>
              <p className="card-text">Pets allowed? : {item.pets}</p>
              <NavLink to={`/Details/${item._id}`}>
                <button
                  type="button"
                  id="btn-details"
                  className="btn btn-primary btn-lg"
                >
                  View Details
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default Shelters;
