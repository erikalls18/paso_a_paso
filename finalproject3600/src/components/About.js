import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <h1 className="display-5 fw-bold text-body-emphasis">Who are we?</h1>
      <p className="col-lg-6 mx-auto">
        We are free information provider about homeless shelters, including
        facility, category, location, phone, meals, pets, etc.
      </p>
      <p className="col-lg-6 mx-auto">
        This website aims to help people with needs and volunteers to locate
        correct information. Although we started with only Vancouver, we invite
        you to help others by{" "}
        <NavLink to="/shelterform" className="linkinfo">
          adding
        </NavLink>{" "}
        or editing the information of other cities in BC here.
      </p>
      <div className="col-lg-6 mx-auto">
        <p>Click on our logo to start browsing!</p> 
        <NavLink to="/"> 
        <img src="/images/Shelters.png" width={400} height={400} className="logo-about" alt="Shelters BC Logo"/>
        </NavLink>
      </div>
      
    </div>
  );
}

export default About;
