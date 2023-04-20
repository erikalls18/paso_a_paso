import { useState } from "react";
import axios from "axios";
const API_URL = "/api/facility";
// to add error handling

// define options for 2 input fields
const categories = [
  { id: 1, name: "Adults (all genders)" },
  { id: 2, name: "Youth (all genders)" },
  { id: 3, name: "Men" },
  { id: 4, name: "Women" },
];

const supports = [
  { id: 1, name: "Meals" },
  { id: 2, name: "Pets" },
  { id: 3, name: "Carts" },
];

function ShelterForm() {
  const [facilityName, setFacilityName] = useState("");
  const [category, setCategory] = useState(categories[0].name);
  const [phone, setPhone] = useState("");
  const [support, setSupport] = useState([]);
  const [localArea, setLocalArea] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [submitBtn, setSubmitBtn] = useState("Add Shelter");
  const [errorMsg, setErrorMsg] = useState("");
  const [errorDiv, setErrorDiv] = useState(false);

  const handleCheck = (option) => {
    let tmp_support = support;
    if (tmp_support.some((sup) => sup.id === option.id)) {
      tmp_support = tmp_support.filter((sup) => sup.id !== option.id);
    } else {
      tmp_support.push(option);
    }
    setSupport(tmp_support);
    console.log(tmp_support);
  };

  const handlePhone = (tel) => {
    if (tel.target.value.length <= 12) {
      const tmp_tel = phoneFormat(tel.target.value);
      setPhone(tmp_tel);
    }
  };

  const phoneFormat = (phone) => {
    const number = phone.trim().replace(/[^0-9]/g, "");
    if (number.length < 4) return number;
    if (number.length < 7) return number.replace(/(\d{3})(\d{1})/, "$1-$2");
    if (number.length < 11)
      return number.replace(/(\d{3})(\d{3})(\d{1})/, "$1-$2-$3");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (facilityName == "" || phone == "" || localArea == "") {
      setErrorDiv(true);
      setErrorMsg("Please fill out mandatory fields with (*). Thank you.");
      return;
    }

    const formData = {
      facility: facilityName,
      category: category,
      phone: phone,
      meals: support.find((s) => s.name === "Meals") ? "yes" : "no",
      pets: support.find((s) => s.name === "Pets") ? "yes" : "no",
      carts: support.find((s) => s.name === "Carts") ? "yes" : "no",
      geo_local_area: localArea,
      geo_point_2d: { lon: parseFloat(lon), lat: parseFloat(lat) },
    };

    createFacility(formData);
    resetForm();
    setErrorDiv(false);
    setSubmitBtn("Success!");
  };

  const createFacility = async (formData) => {
    const response = await axios.post(API_URL, formData);
    return response.data;
  };

  const resetForm = () => {
    setFacilityName("");
    setCategory(categories[0].name);
    setPhone("");
    setSupport([]);
    setLocalArea("");
    setLat("");
    setLon("");
  };

  return (
    <form className="shelter-card-form " onSubmit={handleSubmit}>
      {errorDiv ? (
        <div class="alert alert-danger" role="alert">
          {errorMsg}
        </div>
      ) : null}

      {/* Shelter Name: Text */}
      <div className="form-group">
        <label htmlFor="facilityName">Facility Name *</label>
        <input
          type="text"
          className="form-control"
          id="facilityName"
          name="facilityName"
          placeholder="e.g. Tenth Avenue Church"
          value={facilityName}
          onChange={(e) => setFacilityName(e.target.value)}
        />
      </div>

      {/* Category: Dropdown Box */}
      <div className="form-group">
        <label htmlFor="category">Category *</label>
        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((option) => (
            <option value={option.name} key={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      {/* Phone: Tel */}
      <div className="form-group">
        <label htmlFor="phone">Phone *</label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          placeholder="e.g. 234-567-8901"
          value={phone}
          onChange={handlePhone}
        />
      </div>

      {/* Support: Checkbox */}
      <div className="form-group">
        <label htmlFor="support">Support</label>
        <br />
        {supports.map((option) => (
          <div className="form-check form-check-inline" key={option.id}>
            <input
              className="form-check-input"
              type="checkbox"
              value={option.name}
              checked={support.find((s) => s.name === option.name)}
              onChange={() => handleCheck(option)}
            />
            <label className="form-check-label">&nbsp;{option.name}</label>
          </div>
        ))}
      </div>

      {/* Local Area: Text */}
      <div className="form-group">
        <label htmlFor="area">Local Area *</label>
        <input
          type="text"
          className="form-control"
          id="area"
          placeholder="e.g. Downtown, Strathcona, etc."
          value={localArea}
          onChange={(e) => setLocalArea(e.target.value)}
        />
      </div>

      {/* Coordinate: Numbers */}
      <div className="form-group">
        <label>Geographic Coordinate (if available)</label>
        <input
          type="number"
          className="form-control"
          id="lat"
          placeholder="Lat"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
        <br/>
        <input
          type="number"
          step="0.1"
          className="form-control"
          id="lon"
          placeholder="Lon"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
        />
      </div>

      {/* Submit: Button */}
      <div className="btn-submit-form">
      <button type="submit" className="btn btn-primary" id="submitForm">
        {submitBtn}
      </button>
      </div>
      <hr />
    </form>
  );
}

export default ShelterForm;
