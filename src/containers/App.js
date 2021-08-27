import React from "react";
import { Header } from "../components/Header";
import { Catalog } from "../components/Catalog";
import "../assets/styles/main.css";

// const ShoeList = [
//   {}
// ]

function App() {
  return (
    <>
      <Header />
      <h1>Buy Nike's all-time bestsellers</h1>
      <Catalog></Catalog>
    </>
  );
}

export default App;
