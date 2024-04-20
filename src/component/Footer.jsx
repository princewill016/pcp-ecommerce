import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div
        className="container"
        style={{ color: "#fa8072", fontStyle: "italic" }}
      >
        <div className="row">
          <div className="col-md-6">
            <h5
              style={{ fontSize: "20px", color: "wheat", fontWeight: "bolder" }}
            >
              Page Navigation
            </h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/"
                  style={{ textDecoration: "none", color: "#fa8072" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  style={{ textDecoration: "none", color: "#fa8072" }}
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  style={{ textDecoration: "none", color: "#fa8072" }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  style={{ textDecoration: "none", color: "#fa8072" }}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  style={{ textDecoration: "none", color: "#fa8072" }}
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/register"
                  style={{ textDecoration: "none", color: "#fa8072" }}
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5
              style={{ fontSize: "20px", color: "wheat", fontWeight: "bolder" }}
            >
              Contact Information
            </h5>
            <p>123 Street Name, City, Country</p>
            <p>Phone: +1234567890</p>
            <p>Email: info@example.com</p>
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#fa8072",
                  marginRight: "10px",
                }}
              >
                <i className="fa fa-facebook" style={{ fontSize: "24px" }}></i>
              </a>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#fa8072",
                  marginRight: "10px",
                }}
              >
                <i className="fa fa-twitter" style={{ fontSize: "24px" }}></i>
              </a>
              <a href="#" style={{ textDecoration: "none", color: "#fa8072" }}>
                <i className="fa fa-instagram" style={{ fontSize: "24px" }}></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="mt-4" />
        <div className="row">
          <div className="col-md-6">
            <a
              href="#"
              className="text-light"
              style={{
                textDecoration: "none",
                color: "#fa8072"
              }}
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="text-light"
              style={{
                textDecoration: "none",
                color: "#fa8072"
              }}
            >
              Terms of Service
            </a>
          </div>
          <div
            className="col-md-6 text-md-end"
            style={{
              textDecoration: "none",
            }}
          >
            <p>&copy; 2024 PCP-Shoppings. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
