import React from "react";

function Image({ img, name, id, handleClick }) {
  return (
    <div className="column is-one-quarter">
      <div className="box">
        <figure>
          <img src={img} alt={name} id={id} onClick={handleClick} />
        </figure>
      </div>
    </div>
  );
}

export default Image;
