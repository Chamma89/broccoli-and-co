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
  const [confirmEmail, setConfirmEmail] = useState("");
  const [emailsMatch, setEmailsMatch] = useState(false);

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
    if (responsePost == 200) {
      setModalIsOpen(() => setModalIsOpen(false));
    }
  }, [responsePost]);

  useEffect(() => {
    if (email !== confirmEmail) {
      setEmailsMatch(false);
    } else {
      setEmailsMatch(true);
    }
  }, [confirmEmail]);

  function matchingEmails() {
    if (email.toLowerCase() === confirmEmail.toLowerCase()) {
      return <span className="text-success">Emails match</span>;
    } else {
      return <span className="text-danger">Emails don't match</span>;
    }
  }

  function resetForm() {
    setName("");
    setEmail("");
    setConfirmEmail("");
    setResponsePost(200);
  }

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
          <button
            onClick={() => {
              setModalIsOpen(true);
            }}
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
              <span className="text-danger">
                {responsePost == 400 ? "Error 400" : ""}
              </span>
              <div className="main-body__modal__content">
                <h2>Request an invite</h2>
                <input
                  type="text"
                  placeholder="Full name"
                  value={name}
                  minLength="3"
                  onChange={(e) => setName(e.currentTarget.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Confirm email"
                  value={confirmEmail}
                  onChange={(e) => setConfirmEmail(e.currentTarget.value)}
                  required
                />
              </div>
              <span>{matchingEmails()}</span>
              <div className="main-body__modal__buttons">
                <button
                  className="main-body__modal__buttons--close"
                  onClick={() => {
                    setModalIsOpen(false);
                    resetForm();
                  }}
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
            </form>
          </Modal>
          <Modal isOpen={successModalIsOpen}>
            <div></div>
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
