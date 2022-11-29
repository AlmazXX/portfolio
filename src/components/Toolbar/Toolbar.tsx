import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import navImg from "../../assets/images/nav-img.png";
import "./Toolbar.css";

const Toolbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const showMenu = { top: isVisible ? 0 : "-150%" };
  const closeMenu = () => {
    setIsVisible(false);
  };

  return (
    <nav className="nav container">
      <NavLink to="/" className="nav__logo">
        <img src={logo} alt="logo" className="nav__logo-img" />
      </NavLink>
      <div className="nav__menu" style={showMenu}>
        <ul className="nav__list">
          <li className="nav__item" onClick={closeMenu}>
            <NavLink className="nav__link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav__item" onClick={closeMenu}>
            <NavLink className="nav__link" to="about-us">
              About
            </NavLink>
          </li>
          <li className="nav__item" onClick={closeMenu}>
            <NavLink className="nav__link" to="trick">
              Candy
            </NavLink>
          </li>
          <li className="nav__item" onClick={closeMenu}>
            <NavLink className="nav__link" to="new">
              New
            </NavLink>
          </li>
        </ul>
        <div className="nav__close" onClick={closeMenu}>
          <i className="bx bx-x"></i>
        </div>
        <img src={navImg} alt="nav-img" className="nav__img" />
      </div>
      <div className="nav__toggle" onClick={() => setIsVisible(true)}>
        <i className="bx bx-grid-alt"></i>
      </div>
    </nav>
  );
};

export default Toolbar;