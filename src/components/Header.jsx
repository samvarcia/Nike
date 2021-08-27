import React from "react";
import logo from "../assets/images/NIKELOGO.svg";
import { ShoppingCar } from "./ShoppingCar";
import "../assets/styles/components/Header.css";

function Header() {
  return (
    <header>
      <img src={logo} alt="Nike" className="nikeLogo" />
      <ShoppingCar />
    </header>
  );
}

export { Header };
