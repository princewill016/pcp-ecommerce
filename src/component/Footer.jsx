import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Footer Navigation</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" style={{ textDecoration: "none", color: "white" }}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/register"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>Contact Information</h5>
            <p>123 Street Name, City, Country</p>
            <p>Phone: +1234567890</p>
            <p>Email: info@example.com</p>
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginRight: "10px",
                }}
              >
                <i className="fa fa-facebook" style={{ fontSize: "24px" }}></i>
              </a>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginRight: "10px",
                }}
              >
                <i className="fa fa-twitter" style={{ fontSize: "24px" }}></i>
              </a>
              <a href="#" style={{ textDecoration: "none", color: "white" }}>
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
                color: "white",
                fontStyle: "italic",
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
                color: "white",
                fontStyle: "italic",
              }}
            >
              Terms of Service
            </a>
          </div>
          <div
            className="col-md-6 text-md-end"
            style={{
              textDecoration: "none",
              color: "white",
              fontStyle: "italic",
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
