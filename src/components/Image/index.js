import React from "react";

function Image({ img, name, id, handleClick, isClicked }) {
  return (
    <div className="column is-one-fifth    ">
      <div className="box">
        <figure>
          <img src={img} alt={name} id={id} onClick={handleClick} />
        </figure>
        {/* for testing */}
        {/* <p>{isClicked.toString()}</p> */}
      </div>
    </div>
  );
}

export default Image;
