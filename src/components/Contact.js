const Contact = () => {
  return (
    <>
      <section className="contactSection" className="fadein2">
        <h1 className="mainTitle">
          <span>CONTACT</span>
        </h1>
        <div className="contactContainer">
          <p>Please feel free to contact to me!</p>
          <p className="contactGmail">Gmail: a13158y@gmail.com</p>
          <a href="javascript:void(0);">
            <div className="box">
              <a href="Yumi_Kimbara_Resume.pdf" rel="resume" target="_blank">
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
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/YumiKimbara"
              rel="linkedin"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
