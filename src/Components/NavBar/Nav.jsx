import React, { useState } from "react";
import "../NavBar/Nav.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/Subtract.png";
import { FaTimes, FaBars } from "react-icons/fa";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const toggleNav = () => setOpen(!open);
  const closeNav = () => setOpen(false);

  const navOpen = <FaBars className="hamburger" onClick={toggleNav} />;

  const navClose = <FaTimes className="hamburger" onClick={toggleNav} />;

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="logo main">
          <Link to="/">
            <img width={12} height={12} src={Logo} alt="Logo" />
            <p>Renty</p>
          </Link>
        </div>

        <div className={open ? "container" : "container active"}>
          <div className="link">
            <NavLink to="buying" onClick={closeNav}>
              Buying
            </NavLink>
            <NavLink to="renting" onClick={closeNav}>
              Renting
            </NavLink>
            <NavLink to="selling" onClick={closeNav}>
              Selling
            </NavLink>
          </div>

          <div className="logo">
            <Link to="/">
              <img width={12} height={12} src={Logo} alt="Logo" />
              <p>Renty</p>
            </Link>
          </div>

          <div className="link2">
            <NavLink to="aboutus" onClick={closeNav}>
              About Us
            </NavLink>
            <NavLink to="services" onClick={closeNav}>
              Services
            </NavLink>
            <NavLink to="contact" onClick={closeNav}>
              Contact
            </NavLink>
          </div>
        </div>

        {open ? navOpen : navClose}
      </div>
    </div>
  );
};

export default Nav;
