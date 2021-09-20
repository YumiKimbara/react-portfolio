import React from "react";

const About = () => {
  return (
    <React.Fragment>
      <section>
        <h1>ABOUT ME</h1>
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
