import React from "react";
import About from "./About";
import Works from "./Works";

const Home = () => {
  return (
    <React.Fragment>
      <div className="mainSection">
        <div className="stars"></div>
        <div className="mainMessage">
          <h1>
            Hi, my name is <span className="myName">Yumi</span>. <br />I am a
            Front-end Developer
            <br />
            based in Vancouver, Canada.
          </h1>
          <div className="readMore">
            <a className="readMoreDetails" href="#aboutSection">
              Read more
              <i className="fas fa-angle-double-down"></i>
            </a>
          </div>
        </div>
      </div>
      <About />
      <Works />
    </React.Fragment>
  );
};

export default Home;
