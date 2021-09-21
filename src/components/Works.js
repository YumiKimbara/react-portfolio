import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";

const Works = () => {
  return (
    <React.Fragment>
      <section className="worksSection" className="fadein2">
        <h1 className="mainTitle">
          <span>WORKS</span>
        </h1>
        <Container>
          <Row className="worksContainer">
            <Col>
              <div className="workImg">
                <img className="showModal1" src="./image/work1.png" />
              </div>
            </Col>
            <Col>
              <div className="worksDescription">
                <h3>Weather App</h3>
                <div className="skillIcons">
                  <div className="skillIcon">
                    <Icon icon="ion:logo-html5" width="26" />
                  </div>
                  <div className="skillIcon">
                    <Icon icon="ion:logo-css3" width="26" />
                  </div>
                  <div className="skillIcon">
                    <Icon icon="cib:js" width="26" />
                  </div>
                  <div className="skillIcon">
                    <Icon icon="ion:logo-react" width="26" />
                  </div>
                  <div className="skillIcon">
                    <Icon icon="cib:redux" width="26" />
                  </div>
                </div>
                <p>
                  This app can access current, hourly and weekly weather data
                  from around the world with Weather API. The background video
                  will be changed depends on the current weather and time. Also
                  you can change from celsius to fahrenheit.
                </p>
                <a href="javascript:void(0);">
                  <div className="box">
                    <div className="boxTxt seeTheWebsite1">See the website</div>
                  </div>
                </a>
              </div>
            </Col>
          </Row>
          <Row className="worksContainer">
            <Col>
              <div className="worksDescription">
                <h3>Pokédex</h3>
                <div className="skillIcons">
                  <div className="skillIcon">
                    <Icon icon="ion:logo-html5" width="26" />
                  </div>
                  <div className="skillIcon">
                    <Icon icon="ion:logo-css3" width="26" />
                  </div>
                  <div className="skillIcon">
                    <Icon icon="cib:js" width="26" />
                  </div>
                  <div className="skillIcon">
                    <Icon icon="ion:logo-sass" width="26" />
                  </div>
                </div>
                <p>
                  This app can render any of the 898 Pokémon from PokéAPI giving
                  the ability to receive detailed character profiles and
                  statistics. You can search Pokémon by typing in the search box
                  or by the types of Pokémon. You can also sort Pokémon by index
                  or alphabet.
                </p>
                <a href="javascript:void(0);">
                  <div className="box">
                    <div className="boxTxt seeTheWebsite2">See the website</div>
                  </div>
                </a>
              </div>
            </Col>
            <Col className="works workImg">
              <img className="showModal2" src="./image/work2.png" />
            </Col>
          </Row>
          <Row className="worksContainer">
            <Col className="works workImg">
              <img className="showModal4" src="./image/work3.png" />
            </Col>
            <Col>
              <div className="worksDescription">
                <h3>Task Management App</h3>
                <div className="skillIcons">
                  <div className="skillIcon">
                    <Icon icon="ion:logo-html5" width="26" />
                  </div>
                  <div className="skillIcon">
                    <Icon icon="ion:logo-css3" width="26" />
                  </div>
                  <div className="skillIcon">
                    <Icon icon="cib:js" width="26" />
                  </div>
                  <div className="skillIcon">
                    <Icon icon="ion:logo-react" width="26" />
                  </div>
                </div>
                <p>
                  This app is CRUD application that you can create, read,
                  update, and delete tasks. I used React Context to create
                  application, and Material UI to create UI.
                </p>
                <a href="javascript:void(0);">
                  <div className="box">
                    <div className="boxTxt seeTheWebsite3">See the website</div>
                  </div>
                </a>
              </div>
            </Col>
          </Row>
          <Row className="worksContainer workDescription">
            <Col>
              <div className="worksDescription">
                <h3 className="comingSoon">Coming soon!</h3>
                <a href="javascript:void(0);">
                  <div className="box">
                    <div className="boxTxt">See the website</div>
                  </div>
                </a>
              </div>
            </Col>
            <Col className="works workImg">
              <img className="showModal4" src="./image/work4.jpg" />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Works;
