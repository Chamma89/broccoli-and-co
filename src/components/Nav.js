import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/_Nav.scss";
import * as ReactBootstrap from "react-bootstrap";
import Logo from "../images/broccoli-icon.png";

function Nav() {
  return (
    <ReactBootstrap.Navbar className="nav sticky-top" expand="lg">
      <ReactBootstrap.Navbar.Brand href="/">
        <div className="nav__logo">
          <img src={Logo} alt="logo" height="30" />
        </div>
      </ReactBootstrap.Navbar.Brand>
      <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
      <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
        <ReactBootstrap.Nav className="container">
          <Link to="/" className="nav__nav-link">
            Work
          </Link>
          <Link to="/about" className="nav__nav-link">
            About
          </Link>
          <Link to="/contact" className="nav__nav-link">
            Contacts
          </Link>
        </ReactBootstrap.Nav>
      </ReactBootstrap.Navbar.Collapse>
    </ReactBootstrap.Navbar>
  );
}

export default Nav;
