import React from "react";

function Modal({ popup }) {
  return (
    <div className={popup}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <figure className="image">
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
