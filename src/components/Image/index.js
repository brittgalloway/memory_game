import React from "react";

function Image(props) {
  return (
    <div className="column is-one-quarter">
      <div className="box">
        <figure>
          <img src={props.img} alt={props.name} />
        </figure>
      </div>
    </div>
  );
}

export default Image;
