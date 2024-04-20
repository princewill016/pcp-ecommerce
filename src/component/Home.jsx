import React from "react";
import Products from "./Products";
function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/cardh.jpg"
          className="card-img"
          alt="cardimg"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              Latest Arrivals
            </h5>
            <p className="card-text lead fs-2">CHECK OUT ALL NEW TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
