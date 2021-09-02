import React from "react";
import "../assets/styles/components/Catalog.css";

function Catalog(props) {
  return (
    <section className="Catalog">
      <div className="Catalog-container">{props.children}</div>
    </section>
  );
}

export { Catalog };
