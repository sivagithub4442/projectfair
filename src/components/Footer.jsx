import React from 'react'
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: "100%", height: "300px" }}>
    <div className="footer-content d-flex justify-content-evenly w-100 flex-wrap">
      <div style={{ width: "400px" }} className="website">
        <h4>
          <i className="fa-solid fa-cloud-arrow-up "></i> Ecart App
        </h4>
        <h6>
          Designed and built with all the love in the world by the Bootstrap
          team with the help of our contributors. Code licensed MIT, docs CC
          BY 3.0. Currently v5.3.2.
        </h6>
      </div>
      <div className="links d-flex flex-column">
        <h4>Links</h4>
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          Home
        </Link>
        <Link to={"/register"} style={{ textDecoration: "none", color: "black" }}>
          Register
        </Link>
        <Link to={"/projects"} style={{ textDecoration: "none", color: "black" }}>
          Projects
        </Link>
      </div>
      <div className="guides d-flex flex-column">
        <h4>Guides</h4>
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          React
        </Link>
        <Link to={"/cart"} style={{ textDecoration: "none", color: "black" }}>
          React Bootstrap
        </Link>
        <Link to={"/wishlist"} style={{ textDecoration: "none", color: "black" }}>
          Routing
        </Link>
      </div>
      <div className="contact d-flex flex-column flex-wrap">
        <h4>Contact Us</h4>
        <div className="d-flex">
          <input
            className="form-control"
            placeholder="Enter Your Mail"
            type="text"
          />
          <button className='btn btn-'>Suscribe</button>
        </div>
        <div className="d-flex justify-content-evenly mt-3 fs-5">
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            <i className="fa-brands fa-twitter" style={{ color: "black" }}></i>
          </Link>
          <Link to={""} style={{ textDecoration: "none", color: "black" }}>
            <i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link to={""} style={{ textDecoration: "none", color: "black" }}>
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link to={""} style={{ textDecoration: "none", color: "black" }}>
            <i className="fa-solid fa-envelope"></i>
          </Link>
        </div>
      </div>
    </div>
    <br />
    <br />
    <p>Copyright © 2023 ECart Built with React.</p>
  </div>
  )
}

export default Footer