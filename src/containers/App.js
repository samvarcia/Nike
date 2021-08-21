import React, { Component } from "react";
import Header from "../components/Header";
import Catalog from "../components/Catalog";
import "../assets/styles/main.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Buy Nike's all-time bestsellers</h1>
        <Catalog />
      </div>
    );
  }
}

export default App;
