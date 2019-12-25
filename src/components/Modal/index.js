import React from "react";

function Modal() {
  return (
    <div className="modal ">
      <div className="modal-background"></div>
      <div className="modal-content">
        <figure className="image is-128by128">
          <img
            src={process.env.PUBLIC_URL + "/images/victoryScreen1x1.webp"}
            alt="The Knight"
          />
        </figure>
      </div>
      <button className="modal-close is-large" aria-label="close"></button>
    </div>
  );
}

export default Modal;
