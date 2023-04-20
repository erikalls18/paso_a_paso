import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="about-container">
      <h1 className="display-5 fw-bold text-body-emphasis">Page Not Found</h1>
      <div className="col-lg-6 mx-auto">
        <p>The page you are trying to access does not exist.</p> 
        <p>Click on our logo to start browsing!</p> 
        <NavLink to="/"> 
        <img src="/images/Shelters.png" width={400} height={400} className="logo-about" alt="Shelters BC Logo"/>
        </NavLink>
      </div>
    </div>
  )
}

export default NotFound