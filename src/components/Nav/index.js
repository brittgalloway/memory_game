import React from "react";
import "../../app.css";
function Nav({ score, topScore }) {
  return (
    <>
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="https://sleepygallows.com/">
            <img
              src={process.env.PUBLIC_URL + "/images/sg_logo.webp"}
              alt="Sleepy Gallows Logo"
            />
          </a>

          <h1 className="title is-1 navbar-item">Memory Game</h1>
          <h2 className="subtitle navbar-item ">
            Score:{score} | Top Score:{topScore}
          </h2>
        </div>
      </nav>
      <section>
        <img
          id="headImg"
          alt="plh cover"
          src={process.env.PUBLIC_URL + "/images/plhGame.svg"}
        />
      </section>
    </>
  );
}

export default Nav;
