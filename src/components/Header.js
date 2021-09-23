import { Link as Scroll } from "react-scroll";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navContainer">
          <ul>
            <li className="navBar">
              <Scroll to="homeSection" smooth={true} duration={600}>
                <a className="navLinks" href="homeSection">
                  HOME
                </a>
              </Scroll>
            </li>
            <li className="navBar">
              <Scroll to="aboutSection" smooth={true} duration={600}>
                <a className="navLinks" href="aboutSection">
                  ABOUT
                </a>
              </Scroll>
            </li>
            <li className="navBar">
              <Scroll to="worksSection" smooth={true} duration={600}>
                <a className="navLinks" href="worksSection">
                  WORKS
                </a>
              </Scroll>
            </li>
            <li className="navBar">
              <Scroll to="contactSection" smooth={true} duration={1000}>
                <a className="navLinks" href="contactSection">
                  CONTACT
                </a>
              </Scroll>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
