import React from "react";
import FeatherIcon from "feather-icons-react";
import "../assets/styles/components/Card.css";

function Card(props) {
  return (
    <div className="card">
      <button type="button">
        <FeatherIcon icon="shopping-bag" size="20" />
      </button>
      <img src={props.cover} alt={props.title} className="shoe-img" />
      <div className="info">
        <h2>{props.title}</h2>
        <div className="priceTag">
          <FeatherIcon icon="dollar-sign" size="20" />
          <h3>{props.price}</h3>
        </div>
      </div>
    </div>
  );
}

export { Card };
