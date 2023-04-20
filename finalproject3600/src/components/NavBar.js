import { NavLink } from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faPersonShelter } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div className="navbar-container">
      <NavLink to="/">
      <img src="/images/Shelters.png" width={100} height={100} className="img-navbar" alt="shelters BC logo"/>
      </NavLink>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
        <ul className="nav nav-masthead ms-auto justify-content-center float-md-end">
          <li className="fw-bold py-1 px-0 active">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="fw-bold py-1 px-0 active">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li className="fw-bold py-1 px-0 active">
            <NavLink to="/shelterform" className="nav-link">
              Add Shelter
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
}

export default NavBar;
