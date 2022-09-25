import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleFeatures, setToggleFeatures] = useState(false);
  const [toggleCompany, setToggleCompany] = useState(false);

  const handleExitMenu = () => {
    setToggleMenu(!toggleMenu);
    setToggleFeatures(false);
    setToggleCompany(false);
  };

  return (
    <nav className="nav__container">
      <img
        className="nav__company-logo"
        src={`${process.env.PUBLIC_URL}/logo.svg`}
        alt="company-logo"
      />
      <img
        onClick={() => setToggleMenu(!toggleMenu)}
        className="nav__hamburger"
        src={`${process.env.PUBLIC_URL}/icon-menu.svg`}
        alt="hamburger-menu"
      />
      <div
        className={
          toggleMenu ? "nav__menu menu-active" : "nav__menu menu-hidden"
        }
      >
        <div className="nav__close-container">
          <img
            onClick={() => handleExitMenu()}
            className="nav__close"
            src={`${process.env.PUBLIC_URL}/icon-close-menu.svg`}
            alt="hamburger-menu"
          />
        </div>
        <ul className="nav__items">
          {/* First section "Features"*/}
          <li className="nav__features">
            <div onClick={() => setToggleFeatures(!toggleFeatures)}>
              <a href="#">Features</a>
              <img
                className="nav__arrow-down"
                src={
                  toggleFeatures
                    ? `${process.env.PUBLIC_URL}/icon-arrow-up.svg`
                    : `${process.env.PUBLIC_URL}/icon-arrow-down.svg`
                }
                alt="arrow-down"
              />
            </div>
            <ul
              className={
                toggleFeatures ? "nav__items-active" : "nav__items-hidden"
              }
            >
              <li>
                <img
                  className="nav__features-icon"
                  src={`${process.env.PUBLIC_URL}/icon-todo.svg`}
                  alt="todo"
                />
                <a href="#">Todo List</a>
              </li>
              <li>
                <img
                  className="nav__features-icon"
                  src={`${process.env.PUBLIC_URL}/icon-calendar.svg`}
                  alt="calendar"
                />
                <a href="#">Calendar</a>
              </li>
              <li>
                <img
                  className="nav__features-icon"
                  src={`${process.env.PUBLIC_URL}/icon-reminders.svg`}
                  alt="reminders"
                />
                <a href="#">Reminders</a>
              </li>
              <li>
                <img
                  className="nav__features-icon"
                  src={`${process.env.PUBLIC_URL}/icon-planning.svg`}
                  alt="planning"
                />
                <a href="#">Planning</a>
              </li>
            </ul>
          </li>

          {/* Second Section */}
          <li className="nav__company">
            <div onClick={() => setToggleCompany(!toggleCompany)}>
              <a href="#">Company</a>
              <img
                className="nav__arrow-down"
                src={
                  toggleCompany
                    ? `${process.env.PUBLIC_URL}/icon-arrow-up.svg`
                    : `${process.env.PUBLIC_URL}/icon-arrow-down.svg`
                }
                alt="arrow-down"
              />
            </div>
            <ul
              className={
                toggleCompany
                  ? "nav__items-active company"
                  : "nav__items-hidden"
              }
            >
              <li>
                <a href="#">History</a>
              </li>
              <li>
                <a href="#">Our Teams</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </li>

          {/* Last Sections with no dropdown */}
          <li>
            <a href="#">Careers</a>
          </li>

          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <div className="nav__button-container">
          <button className="nav__login">Login</button>
          <button className="nav__register">Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
