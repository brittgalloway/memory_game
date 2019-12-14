import React from "react";

function Image(props) {
  return (
    <div className="column is-one-quarter">
      {/* <div onClick={this.handleClick} className="box"> */}
      <div
        onClick={() => alert("this will shuffle and keep score at some point!")}
        className="box"
      >
        <figure>
          <img src={props.img} alt={props.name} />
        </figure>
      </div>
    </div>
  );
}

export default Image;
