import React, { Component } from "react";
import "../assets/styles/components/ShoppingBag.css";
import FeatherIcon from "feather-icons-react";

function ShoppingCar() {
  let amount = 0;
  return (
    <div className="bag-container">
      <div>
        <FeatherIcon icon="dollar-sign" size="20" />
        {amount}
      </div>
      <FeatherIcon icon="shopping-cart" size="20" />
    </div>
  );
}

export { ShoppingCar };
