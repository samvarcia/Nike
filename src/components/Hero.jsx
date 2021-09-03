import React from "react";

const heroText = ["NIKE'S", "ALL-TIME", "BESTSELLERS"];
export default function Hero() {
  return (
    <section className="HeroContainer">
      <h1 className="HeroText">
        <span>{heroText[0]}</span>
        <span>{heroText[1]}</span>
        <span>{heroText[2]}</span>
      </h1>
    </section>
  );
}
