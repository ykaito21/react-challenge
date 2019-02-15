import React from "react";

function Main() {
  return (
    <main>
      <h1 className="lg-heading">
        About <span className="text-secondary">Me</span>
      </h1>
      <h2 className="sm-heading">Let me tell you...</h2>
      <div className="icons">
        <a href="#">
          <i className="fab fa-twitter fa-2x" />
        </a>
        <a href="#">
          <i className="fab fa-facebook fa-2x" />
        </a>
        <a href="#">
          <i className="fab fa-linkedin fa-2x" />
        </a>
        <a href="#">
          <i className="fab fa-github fa-2x" />
        </a>
      </div>
    </main>
  );
}

export default Main;
