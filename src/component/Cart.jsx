import React from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { delItem } from "../redux/action/index";
const Cart = () => {
  const state = useSelector((state) => state.addCart);
  const dispatch = useDispatch();

  const cartItems = (cartItems) => {
    return (
      <div className="px-5 my-5 bg-light rounder-3" key={cartItems.key}>
        <div className="container py-4">
          <button className="btn-close float-end" aria-label="Close"></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItems.img}
                alt={cartItems.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>
                <p></p>
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <>{state.length !== 0 && state.map(cartItems)}</>;
};
