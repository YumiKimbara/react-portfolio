import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";

import { MotionAnimate } from "react-motion-animate";

const Works = () => {
  return (
    <>
      <MotionAnimate animation="fadeInUp" speed="1.5">
        <section className="worksSection" id="worksSection">
          <h1 className="mainTitle">
            <span>WORKS</span>
          </h1>
          <Container>
            <Row className="worksContainer">
              <Col>
                <div className="workImg">
                  <img src="./image/work1.png" />
                </div>
              </Col>
              <Col>
                <div className="worksDescription">
                  <h3>FF Matcher</h3>
                  <div className="skillIcons">
                    <div className="skillIcon">
                      <Icon icon="ion:logo-react" className="icons" />
                    </div>
                    <div className="skillIcon">
                      <Icon icon="cib:redux" className="icons" />
                    </div>
                    <div className="skillIcon">
                      <Icon icon="fa-brands:node-js" className="icons" />
                    </div>
                    <div className="skillIcon">
                      <Icon icon="cib:mongodb" className="icons" />
                    </div>
                    <div className="skillIcon">
                      <Icon icon="cib-amazon-aws" className="icons" />
                    </div>
                  </div>
                  <p>
                    This is a fullstack application that you can find your
                    favorite Final Fantasy series by just answering a few
                    questions! Node.js is used for the authentication and
                    mongoDB is used for storeing data.
                  </p>

                  <div className="box">
                    <a
                      href="https://github.com/YumiKimbara/FF-Matcher"
                      rel="work"
                      target="_blank"
                    >
                      <div className="boxTxt">Github</div>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="worksContainer columnReverse">
              <Col>
                <div className="worksDescription">
                  <h3>Weather App</h3>
                  <div className="skillIcons">
                    <div className="skillIcon">
                      <Icon icon="ion:logo-react" className="icons" />
                    </div>
                    <div className="skillIcon">
                      <Icon icon="cib:redux" className="icons" />
                    </div>
                  </div>
                  <p>
                    This app can access current, hourly and weekly weather data
                    from around the world with Weather API. The background video
                    will be changed depends on the current weather and time.
                    Also you can change from celsius to fahrenheit.
                  </p>
                  <div className="box">
                    <a
                      href="https://weather-app-react-redux.vercel.app/"
                      rel="work"
                      target="_blank"
                    >
                      <div className="boxTxt">website</div>
                    </a>
                  </div>
                  <div className="box">
                    <a
                      href="https://github.com/YumiKimbara/weather-app-react-redux"
                      rel="work"
                      target="_blank"
                    >
                      <div className="boxTxt">Github</div>
                    </a>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="workImg">
                  <img src="./image/work2.png" />
                </div>
              </Col>
            </Row>
            <Row className="worksContainer">
              <Col>
                <div className="workImg">
                  <img src="./image/work3.png" />
                </div>
              </Col>
              <Col>
                <div className="worksDescription">
                  <h3>Pokédex</h3>
                  <div className="skillIcons">
                    <div className="skillIcon">
                      <Icon icon="ion:logo-html5" className="icons" />
                    </div>
                    <div className="skillIcon">
                      <Icon icon="ion:logo-css3" className="icons" />
                    </div>
                    <div className="skillIcon">
                      <Icon icon="cib:js" className="icons" />
                    </div>
                    <div className="skillIcon">
                      <Icon icon="ion:logo-sass" className="icons" />
                    </div>
                  </div>
                  <p>
                    This app can render any of the 898 Pokémon from PokéAPI
                    giving the ability to receive detailed character profiles
                    and statistics. You can search Pokémon by typing in the
                    search box or by the types of Pokémon. You can also sort
                    Pokémon by index or alphabet.
                  </p>
                  <div className="box">
                    <a
                      href="https://pokedex-eqksvrcmv-yumi0127.vercel.app/"
                      rel="work"
                      target="_blank"
                    >
                      <div className="boxTxt">website</div>
                    </a>
                  </div>
                  <div className="box">
                    <a
                      href="https://github.com/YumiKimbara/pokedex"
                      rel="work"
                      target="_blank"
                    >
                      <div className="boxTxt">Github</div>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="worksContainer columnReverse">
              <Col>
                <div className="worksDescription">
                  <h3>Task Management App</h3>
                  <div className="skillIcons">
                    <div className="skillIcon">
                      <Icon icon="ion:logo-react" className="icons" />
                    </div>
                  </div>
                  <p>
                    This app is CRUD application that you can create, read,
                    update, and delete tasks. I used React Context to create
                    application, and Material UI to create UI.
                  </p>
                  <div className="box">
                    <a
                      href="https://task-management-phi.vercel.app/"
                      rel="work"
                      target="_blank"
                    >
                      <div className="boxTxt">website</div>
                    </a>
                  </div>
                  <div className="box">
                    <a
                      href="https://github.com/YumiKimbara/task-management"
                      rel="work"
                      target="_blank"
                    >
                      <div className="boxTxt">Github</div>
                    </a>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="workImg">
                  <img src="./image/work4.png" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </MotionAnimate>
    </>
  );
};

export default Works;
