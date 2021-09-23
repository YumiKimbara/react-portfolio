import About from "./About";
import Works from "./Works";
import Contact from "./Contact";

import { Link as Scroll } from "react-scroll";

const Home = () => {
  return (
    <>
      <div className="mainSection" id="homeSection">
        <div className="mainMessage">
          <h1>
            Hi, my name is <span className="myName">Yumi</span>
            . <br />I am a Front-end Developer
            <br />
            based in Vancouver, Canada.
          </h1>
          <img class="circle1" src="./image/circle1.svg" alt="circle1" />
          <img class="circle2" src="./image/circle2.svg" alt="circle2" />
          <img class="circle3" src="./image/circle3.svg" alt="circle3" />
          <img class="circle4" src="./image/circle4.svg" alt="circle4" />

          {/*<div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
          <div class="circle5"></div>
          */}
          <div className="readMore">
            <a className="readMoreDetails" href="#aboutSection">
              <Scroll to="aboutSection" smooth={true} duration={600}>
                {" "}
                Read more
              </Scroll>
              <i className="fas fa-angle-double-down"></i>
            </a>
          </div>
        </div>
      </div>
      <About />
      <Works />
      <Contact />
    </>
  );
};

export default Home;
