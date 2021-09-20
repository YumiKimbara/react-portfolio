import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navContainer">
          <ul>
            <li className="navBar">
              <a className="navLinks" href="#homeSection">
                HOME
              </a>
            </li>
            <li className="navBar">
              <a className="navLinks" href="#aboutSection">
                ABOUT
              </a>
            </li>
            <li className="navBar">
              <a className="navLinks" href="#worksSection">
                WORKS
              </a>
            </li>
            <li className="navBar">
              <a className="navLinks" href="#contactSection">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
