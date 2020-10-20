import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "../styles/_Main.scss";
import MainImage from "../images/main-veggies.jpg";
import DeliveryTruck from "../images/delivery-icon.png";
import Charity from "../images/charity-icon.png";
import Sustainability from "../images/sustainability-icon.png";

Modal.setAppElement("#root");

function Main() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [responsePost, setResponsePost] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailsMatchedMessage, setEmailsMatchedMessage] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (email !== confirmEmail) {
      return false;
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    };

    fetch(
      "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth",
      requestOptions
    ).then((response) => {
      setResponsePost(() => setResponsePost(response.status));
      return response.json();
    });
  };

  useEffect(() => {
    setResponsePost(300);
    if (email.length !== 0 && confirmEmail.length !== 0) {
      if (email.toLowerCase() === confirmEmail.toLowerCase()) {
        setEmailsMatchedMessage(() => setEmailsMatchedMessage("Emails match"));
      } else {
        setEmailsMatchedMessage(() =>
          setEmailsMatchedMessage("Emails dont match")
        );
      }
    } else {
      setEmailsMatchedMessage("");
    }
  }, [email, confirmEmail]);

  useEffect(() => {
    if (responsePost === 200) {
      setModalIsOpen(() => setModalIsOpen(false));
      setSuccessModalIsOpen(() => setSuccessModalIsOpen(true));
    }
  }, [responsePost]);

  function resetForm() {
    setName("");
    setEmail("");
    setConfirmEmail("");
    setResponsePost(300);
  }

  return (
    <div className="main-body">
      <div className="main-body__section">
        <img
          src={MainImage}
          className="main-body__image"
          alt="broccoli and co main image"
        />
        <div className="main-body__headings">
          <h1>
            A better way
            <br /> to enjoy everyday.
          </h1>
          <h4>Be the first to know when we launch.</h4>
          <button
            onClick={() => {
              setModalIsOpen(true);
            }}
            aria-label="Request invite"
          >
            <span>Request an invite</span>
          </button>
          <Modal
            style={{
              overlay: {
                backgroundColor: "rgba(255, 255, 255, 0.75)",
              },
            }}
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            aria={{
              labelledby: "heading",
              describedby: "full_description",
            }}
            closeTimeoutMS={500}
            className="main-body__modal"
          >
            <form onSubmit={onSubmit}>
              <fieldset>
                <span className="text-danger mt-3">
                  {responsePost === 400 ? "Oops. Try another email" : ""}
                </span>
                <div className="main-body__modal__content">
                  <legend>Request an invite</legend>
                  <div className="main-body__modal__input">
                    <b>Name</b>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      value={name}
                      minLength="3"
                      onChange={(e) => {
                        setName(e.currentTarget.value);
                      }}
                      required
                    />
                  </div>
                  <div className="main-body__modal__input">
                    <b>Email</b>
                    <input
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.currentTarget.value)}
                      required
                    />
                  </div>
                  <div className="main-body__modal__input">
                    <b>Confirm email</b>
                    <input
                      type="email"
                      placeholder="Confirm your email"
                      value={confirmEmail}
                      onChange={(e) => setConfirmEmail(e.currentTarget.value)}
                      required
                    />
                  </div>
                  <span
                    className={`${
                      email === confirmEmail ? "text-success" : "text-danger"
                    } m-2`}
                  >
                    {emailsMatchedMessage}
                  </span>
                  <div className="main-body__modal__buttons">
                    <button
                      className="main-body__modal__buttons--close"
                      onClick={() => {
                        setModalIsOpen(false);
                        resetForm();
                      }}
                      aria-label="Close request invite modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="main-body__modal__buttons--submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
          </Modal>
          <Modal
            onRequestClose={() => setSuccessModalIsOpen(false)}
            className="success-modal"
            isOpen={successModalIsOpen}
            aria={{
              labelledby: "heading",
              describedby: "full_description",
            }}
            closeTimeoutMS={500}
          >
            <div className="success-modal__content">
              <h2>All done!</h2>
              <p>You will receieve an invite in the mail any second now.</p>
              <button
                onClick={() => {
                  setSuccessModalIsOpen(false);
                  resetForm();
                }}
                aria-label="Close successful invite modal"
              >
                Close
              </button>
            </div>
          </Modal>
        </div>
      </div>
      <div className="our-purpose container">
        <a href="/about">
          <div className="our-purpose__section">
            <div className="our-purpose__section--line-1"></div>
            <img src={DeliveryTruck} alt="What we do icon" />
            <h3>What we do</h3>
            <p>
              We deliver the freshest vegetables in all of Australia to your
              company every morning. These are organically sourced and
              presersvative free veggies.
            </p>
          </div>
        </a>
        <a href="/about">
          <div className="our-purpose__section">
            <div className="our-purpose__section--line-2"></div>
            <img src={Charity} alt="Charity icon" />
            <h3>Our charities</h3>
            <p>
              We're always happy to deliver unwanted vegetables to the needy. We
              also hold multiple charity events per year.
            </p>
          </div>
        </a>
        <a href="/about">
          <div className="our-purpose__section">
            <div className="our-purpose__section--line-3"></div>
            <img src={Sustainability} alt="Sustainability icon" />
            <h3>Sustainability</h3>
            <p>
              For every company we sign up, we plant one tree in the forrest of
              Narnia. Currently we're up to 5000 trees!
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Main;
