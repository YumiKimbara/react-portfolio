import About from "./About";
import Works from "./Works";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="mainSection">
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
      <Contact />
    </>
  );
};

export default Home;
