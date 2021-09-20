import React from "react";

const About = () => {
  return (
    <React.Fragment>
      <section className="aboutSection">
        <h1 className="mainTitle">
          <span>ABOUT ME</span>
        </h1>
        <div class="aboutImgContent">
          <img class="img" src="./image/profile-pic.JPG" />
          <div class="circle"></div>
        </div>
        <div className="aboutContainer">
          <h2>
            <span className="myName">Yumi Kimbara</span>
          </h2>
          <h2>Front-end Developer based in Vancouver, Canada.</h2>
          <h3>Skills</h3>
          <p>HTML5, CSS3, Sass, JavaScript, React, Node, Bootstrap, Git</p>
          <h3>Education</h3>
          <p>
            Web and Mobile App Development Co-Op Diploma in Cornerstone
            International Community College of Canada (January 2021 - December
            2021)
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
