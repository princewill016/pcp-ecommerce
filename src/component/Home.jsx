import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      {/* <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/assets/firstca.jpg"
              className="d-block w-100"
              alt="first carosel"
            />{" "}
          </div>
          <div className="carousel-item">
            <img
              src="/assets/secondca.jpg"
              className="d-block w-100"
              alt="second carosel"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/assets/thirdca.jpg"
              className="d-block w-100"
              alt="third carosel"
            />
          </div>
        </div>
      </div> */}

      {/* gap */}
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

