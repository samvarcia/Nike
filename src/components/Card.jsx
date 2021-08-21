import React from "react";
import FeatherIcon from "feather-icons-react";
import "../assets/styles/components/Card.css";

const Card = ({ cover, title, price }) => {
  return (
    <div className="card">
      <img src={cover} alt={title} />
      <h2>{title}</h2>
      <div className="priceTag">
        <FeatherIcon icon="dollar-sign" size="20" />
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Card;
