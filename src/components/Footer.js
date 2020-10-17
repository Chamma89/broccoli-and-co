import React, { Component } from "react";
import "../styles/_Footer.scss";
import * as ReactBootstrap from "react-bootstrap";

function Footer() {
  return (
    <div>
      <section class="footer">
        <div class="footer__container">
          <div class="footer__content">
            <div class="footer__heading">
              <h2>No chemical in our vegetable ;)</h2>
            </div>
            <p class="mb-0">Broccoli & Co. © 2020 built by Fouad Chamma</p>

            <ul class="social__media">
              <li>
                <a href="#">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-youtube" aria-hidden="true"></i>
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
