import React, { Component, useState } from "react";
import Modal from "react-modal";
import "../styles/_Main.scss";
import MainImage from "../images/main-veggies.jpg";
import DeliveryTruck from "../images/delivery-icon.png";
import Charity from "../images/charity-icon.png";
import Sustainability from "../images/sustainability-icon.png";

function Main() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="main-body">
      <div className="main-body__section">
        <img src={MainImage} className="main-body__image" alt="logo" />
        <div className="main-body__headings">
          <h1>
            A better way
            <br /> to enjoy everyday.
          </h1>
          <h4>Be the first to know when we launch.</h4>
          <button onClick={() => setModalIsOpen(true)}>
            <span>Request an invite</span>
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            aria={{
              labelledby: "heading",
              describedby: "full_description",
            }}
            closeTimeoutMS={500}
            className="main-body__modal"
          >
            <div>
              <h2>This is a Modal</h2>
              <button onClick={() => setModalIsOpen(false)}>Close</button>
            </div>
          </Modal>
        </div>
      </div>
      <div className="our-purpose container">
        <div className="our-purpose__section">
          <div className="our-purpose__section--line-1"></div>
          <img src={DeliveryTruck} alt="DeliveryTruck" />
          <h3>What we do</h3>
          <p>
            We deliver the freshest vegetables in all of Australia to your
            company every morning. These are organically sourced and
            presersvative free veggies.
          </p>
        </div>
        <div className="our-purpose__section">
          <div className="our-purpose__section--line-2"></div>
          <img src={Charity} alt="Charity" />
          <h3>Our charities</h3>
          <p>
            We're always happy to deliver unwanted vegetables to the needy. We
            also hold multiple charity events per year.
          </p>
        </div>
        <div className="our-purpose__section">
          <div className="our-purpose__section--line-3"></div>
          <img src={Sustainability} alt="Sustainability" />
          <h3>Sustainability</h3>
          <p>
            For every company we sign up, we plant one tree in the forrest of
            Narnia. Currently we're up to 5000 trees!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
