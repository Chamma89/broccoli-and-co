import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import "../styles/_Main.scss";
import Image from "../images/main-veggies.jpg";

function Main() {
  return (
    <div className="main-body">
      <img src={Image} className="main-body__image" alt="logo" />
      <div></div>
    </div>
  );
}

export default Main;
