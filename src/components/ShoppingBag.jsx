import React, { Component } from "react";
import "../assets/styles/components/ShoppingBag.css";
import FeatherIcon from "feather-icons-react";

export let amount = 0;
class ShoppingBag extends Component {
  render() {
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
}

export default ShoppingBag;
