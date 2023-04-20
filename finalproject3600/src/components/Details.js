import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import Map from "./Map";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import "../Details.css";
const API_URL = "/api/facility/";

function Details() {
  const { id } = useParams(); //uses the id that comes from the Shelter
  const [shelter, setShelter] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL + id)
      .then((res) => res.data)
      .then((data) => setShelter(data));
  }, [id]);

  return (
    //returns JSX with info from the Shelter that matches above
    <div className="container-details">
      {
        <div className="shelter">
          <h2 className="header-shelter">{shelter.facility}</h2>
          <div className="infoAndMap">
            <div className="main-information border border-5">
              <div className="shelter-info">
                <div className="logo">
                  <img
                    src="/images/category.png"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="content-shelter">
                  <p>Category: {shelter.category}</p>
                </div>
              </div>
              <div className="shelter-info">
                <div className="logo">
                  <img
                    src="/images/phone.png"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="content-shelter">
                  <p>Phone: {shelter.phone}</p>
                </div>
              </div>
              <div className="shelter-info">
                <div className="logo">
                  <img
                    src="/images/coffee.png"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="content-shelter">
                  <p>Meals: {shelter.meals}</p>
                </div>
              </div>
              <div className="shelter-info">
                <div className="logo">
                  <img
                    src="/images/paw-filled.png"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="content-shelter">
                  <p>Pets allowed? {shelter.pets}</p>
                </div>
              </div>
              <div className="shelter-info">
                <div className="logo">
                  <img
                    src="/images/shopping-cart.png"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="content-shelter">
                  <p>Carts allowed? {shelter.carts}</p>
                </div>
              </div>
              <div className="shelter-info">
                <div className="logo">
                  <img
                    src="/images/current-location.png"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="content-shelter">
                  <p>Location Area: {shelter.geo_local_area}</p>
                </div>
              </div>
              
            </div>
            <div className="container-map border border-5">
                <h2>Use the map to locate us!</h2>
                <Map idmap={id} />
              </div>
          </div>
        </div>
      }

      <div>
        <Comments id={id} />
      </div>
    </div>
  );
}

export default Details;
