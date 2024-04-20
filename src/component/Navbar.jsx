import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const state = useSelector((state) => {
    console.log("Current state:", state);
    return state.handleCart;
  });
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light py-3 shadow-lg fixed-top">
        <div className="container">
          <img
            src="/assets/icon.jpg"
            alt="cardimg"
            height="50px"
            width="50px"
            style={{ borderRadius: "20px", marginRight: "6px" }}
          />
          <NavLink
            className="navbar-brand fw-bold fs-2"
            to="/"
            style={{ color: "#fa8072" }}
          >
            PCP-Shoppings
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{ color: "#fa8072" }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/products"
                  style={{ color: "#fa8072" }}
                >
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  style={{ color: "#fa8072" }}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  style={{ color: "#fa8072" }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink
                to="/login"
                className="btn btn-outline-dark"
                style={{ color: "#fa8072" }}
              >
                <i className="fa fa-sign-in me-1"></i>Login
              </NavLink>
              <NavLink
                to="/register"
                className="btn btn-outline-dark ms-2"
                style={{ color: "#fa8072" }}
              >
                <i className="fa fa-user me-1"></i>Register
              </NavLink>
              <NavLink
                to="/cart"
                className="btn btn-outline-dark ms-2"
                style={{ color: "#fa8072" }}
              >
                <i className="fa fa-user me-1"></i>Cart ({state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
