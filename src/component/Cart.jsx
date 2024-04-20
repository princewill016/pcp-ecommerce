import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const state = useSelector((state) => state.addCart);

  const cartItems = (cartItem) => {
    return (
      <div className="px-5 my-5 bg-light rounder-3 bb py-5" key={cartItem.key}>
        <div className="container py-4">
          <button className="btn-close float-end" aria-label="Close"></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.img}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              {/* Include other item details here */}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <>{state && state.length !== 0 && state.map(cartItems)}</>;
};

export default Cart;
