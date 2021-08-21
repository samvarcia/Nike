import React, { Component } from "react";
import logo from "../assets/images/NIKELOGO.svg";
import ShoppingBag from "./ShoppingBag";
import "../assets/styles/components/Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt="Nike" className="nikeLogo" />
        <ShoppingBag />
      </header>
    );
  }
}

export default Header;
