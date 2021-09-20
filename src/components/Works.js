import React from "react";
const Works = () => {
  return (
    <React.Fragment>
      <section id="worksSection" class="fadein2">
        <h1 class="mainTitle">
          <span>WORKS</span>
        </h1>
        <div class="container">
          <div class="row worksContainer">
            <div class="col-5 workImg">
              <img class="showModal1" src="./image/work1.png" />
            </div>
            <div class="col-7">
              <div class="worksDescription">
                <h3>Weather App</h3>
                <div class="skillIcons">
                  <div class="skillIcon">
                    <span
                      class="iconify"
                      data-icon="ion:logo-html5"
                      data-width="26"
                    ></span>
                  </div>
                  <div class="skillIcon">
                    <span
                      class="iconify"
                      data-icon="ion:logo-css3"
                      data-width="26"
                    ></span>
                  </div>
                  <div class="skillIcon">
                    <span
                      class="iconify"
                      data-icon="cib:js"
                      data-width="26"
                    ></span>
                  </div>
                  <div class="skillIcon">
                    <span
                      class="iconify"
                      data-icon="ion:logo-react"
                      data-width="26"
                    ></span>
                  </div>
                  <div class="skillIcon">
                    <span
                      class="iconify"
                      data-icon="cib:redux"
                      data-width="26"
                    ></span>
                  </div>
                </div>
                <p>
                  This app can access current, hourly and weekly weather data
                  from around the world with Weather API. The background video
                  will be changed depends on the current weather and time. Also
                  you can change from celsius to fahrenheit.
                </p>
                <a href="javascript:void(0);">
                  <div class="box">
                    <div class="boxTxt seeTheWebsite1">See the website</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="row worksContainer">
            <div class="col-7">
              <div class="worksDescription">
                <h3>Pokédex</h3>
                <div class="skillIcons">
                  <div class="skillIcon">
                    <span
                      class="iconify"
                      data-icon="ion:logo-html5"
                      data-width="26"
                    ></span>
                  </div>
                  <div class="skillIcon">
                    <span
                      class="iconify"
                      data-icon="ion:logo-css3"
                      data-width="26"
                    ></span>
                  </div>
                  <div class="skillIcon">
                    <span
                      class="iconify"
                      data-icon="cib:js"
                      data-width="26"
                    ></span>
                  </div>
                  <div class="skillIcon">
                    <span
                      class="iconify"
                      data-icon="ion:logo-sass"
                      data-width="26"
                    ></span>
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
                  <div class="box">
                    <div class="boxTxt seeTheWebsite2">See the website</div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-5 works workImg">
              <img class="showModal2" src="./image/work2.png" />
            </div>
          </div>
          <div class="row worksContainer">
            <div class="col-5 works workImg">
              <img class="showModal4" src="./image/work3.png" />
            </div>
            <div class="col-7">
              <div class="worksDescription">
                <h3>Task Management App</h3>
                <div class="skillIcons">
                  <div class="skillIcon">
                    <span
                      class="iconify"
                      data-icon="ion:logo-html5"
                      data-width="26"
                    ></span>
                  </div>
                  <div class="skillIcon">
                    <span
                      class="iconify"
                      data-icon="ion:logo-css3"
                      data-width="26"
                    ></span>
                  </div>
                  <div class="skillIcon">
                    <span
                      class="iconify"
                      data-icon="cib:js"
                      data-width="26"
                    ></span>
                  </div>
                  <div class="skillIcon">
                    <span
                      class="iconify"
                      data-icon="ion:logo-react"
                      data-width="26"
                    ></span>
                  </div>
                </div>
                <p>
                  This app is CRUD application that you can create, read,
                  update, and delete tasks. I used React Context to create
                  application, and Material UI to create UI.
                </p>
                <a href="javascript:void(0);">
                  <div class="box">
                    <div class="boxTxt seeTheWebsite3">See the website</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="row worksContainer workDescription">
            <div class="col-7">
              <div class="worksDescription">
                <h3 class="comingSoon">Coming soon!</h3>
                <a href="javascript:void(0);">
                  <div class="box">
                    <div class="boxTxt">See the website</div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-5 works workImg">
              <img class="showModal4" src="./image/work4.jpg" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Works;
