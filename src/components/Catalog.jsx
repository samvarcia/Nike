import React from "react";
import "../assets/styles/components/Catalog.css";

function Catalog(props) {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}

export { Catalog };
