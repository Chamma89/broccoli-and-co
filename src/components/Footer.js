import React, { Component } from "react";
import "../styles/_Footer.scss";
import * as ReactBootstrap from "react-bootstrap";

function Footer() {
  return (
    <div>
      <section className="footer">
        <div className="footer__container">
          <div className="footer__content">
            <div className="footer__heading">
              <h2>No chemical in our vegetable ;)</h2>
            </div>
            <p className="mb-0">Broccoli & Co. © 2020 built by Fouad Chamma</p>

            <ul className="social__media">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-youtube" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
