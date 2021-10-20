import { MotionAnimate } from "react-motion-animate";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <MotionAnimate animation="fadeInUp" speed="1.5">
        <section className="contactSection" id="contactSection">
          <h1 className="mainTitle">
            <span>CONTACT</span>
          </h1>
          <div className="contactContainer">
            <p>Please feel free to contact to me!</p>
            <p className="contactGmail">Gmail: a13158y@gmail.com</p>
            <a href="javascript:void(0);">
              <div className="box">
                <a href="Yumi-Kimbara-Resume.pdf" rel="resume" target="_blank">
                  <div className="boxTxt">Resume</div>
                </a>
              </div>
            </a>
            <div className="icons">
              <a
                href="https://www.linkedin.com/in/yumi-kimbara-219261204/"
                rel="linkedin"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/YumiKimbara"
                rel="github"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </section>
      </MotionAnimate>
    </>
  );
};

export default Contact;
