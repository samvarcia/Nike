import React from "react";
import { Header } from "../components/Header";
import { Catalog } from "../components/Catalog";
import { Card } from "../components/Card";
import cover1 from "../assets/images/cover1.svg";
import cover2 from "../assets/images/cover2.svg";
import cover3 from "../assets/images/cover3.svg";
import cover4 from "../assets/images/cover4.svg";
import cover5 from "../assets/images/cover5.svg";
import cover6 from "../assets/images/cover6.svg";
import cover7 from "../assets/images/cover7.svg";
import cover8 from "../assets/images/cover8.svg";
import cover9 from "../assets/images/cover9.svg";
import "../assets/styles/main.css";

const shoes = [
  { cover: cover1, title: "Nike Air Force 1 '07 LV8", price: 110 },
  { cover: cover2, title: "Jordan Delta 2", price: 130 },
  { cover: cover3, title: "Jordan MA2", price: 125 },
  { cover: cover4, title: "Nike Blazer Mid '77 Vintage", price: 100 },
  { cover: cover5, title: "Jordan Pro Strong", price: 140 },
  { cover: cover6, title: "KD14", price: 150 },
  { cover: cover7, title: "Air Jordan 1 Hi FlyEase", price: 140 },
  { cover: cover8, title: "Nike Air Max 97", price: 170 },
  { cover: cover9, title: "Nike Cortez", price: 75 },
];

function App() {
  return (
    <>
      <Header />
      <h1>Buy Nike's all-time bestsellers</h1>
      <Catalog>
        {shoes.map((shoe) => (
          <Card cover={shoe.cover} title={shoe.title} price={shoe.price} />
        ))}
      </Catalog>
    </>
  );
}

export default App;
