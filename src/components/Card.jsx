import React from "react";
import FeatherIcon from "feather-icons-react";
import "../assets/styles/components/Card.css";

function Card(props) {
  return (
    <div className="card">
      <button type="button">
        <FeatherIcon icon="shopping-bag" size="20" />
      </button>
      <img src={props.cover} alt={props.title} />
      <h2>{props.title}</h2>
      <div className="priceTag">
        <FeatherIcon icon="dollar-sign" size="20" />
        <p>{props.price}</p>
      </div>
    </div>
  );
}

export { Card };
