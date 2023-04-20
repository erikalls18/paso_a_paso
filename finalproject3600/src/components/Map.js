import React, { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "../App.css";
import axios from "axios";
const API_URL = "/api/facility/";

function Map(props) {
  //brings the id from the Shelter
  const [shelterMap, setShelterMap] = useState(null);

  useEffect(() => {
    //fetch the API with the ID
    axios
      .get(API_URL + props.idmap)
      .then((res) => res.data)
      .then((data) => setShelterMap(data));
  }, [props.idmap]);

  const lat = shelterMap?.geo_point_2d?.lat; //Sets coordinates
  const lng = shelterMap?.geo_point_2d?.lon;

  useEffect(() => {
    //uses leaflet API to set a map with the coordinates
    if (lat && lng) {
      const mymap = L.map("mapid").setView([lat, lng], 15);
      let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
      });

      L.Marker.prototype.options.icon = DefaultIcon;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(mymap);

      L.marker([lat, lng]).addTo(mymap);

      return () => {
        mymap.remove();
      };
    }
  }, [lat, lng]);

  return (
    <div>
      {shelterMap && lat && lng && (
        <div style={{ height: "400px" }} id="mapid" />
      )}
    </div>
  );
}

export default Map;
