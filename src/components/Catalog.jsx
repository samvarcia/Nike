import React from "react";

function Catalog(props) {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}

export { Catalog };
