const About = () => {
  return (
    <>
      <section className="aboutSection" id="aboutSection">
        <h1 className="mainTitle">
          <span>ABOUT ME</span>
        </h1>
        <div className="aboutContainer">
          <div className="aboutImgContent">
            <img className="img" src="./image/profile-pic.JPG" />
            <div className="circle"></div>
          </div>
          <div className="aboutContent">
            <h2>
              <span className="myName">Yumi Kimbara</span>
            </h2>
            <h2>Front-end Developer based in Vancouver, Canada.</h2>
            <h3>Skills and Tools</h3>
            <p>
              JavaScript, TypeScript, React.js, Next.js, GraphQL, HTML, CSS,
              Sass, Node.js, Express.js, MongoDB, Bootstrap, Material UI, Jest,
              React Testing Library, Vercel, API, Git
            </p>
            <h3>Work Experience</h3>
            <p>
              *Simbi by Jugaad Ventures Inc. — Front-end developer
              <br />
              *Musician First — Front-end developer
            </p>
            <h3>Education</h3>
            <p>
              Web and Mobile App Development Co-Op Diploma in Cornerstone
              International Community College of Canada (January 2021 - December
              2021)
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
