import React from "react";
import "./Contact.css"; // CSS file ko import karna zaroori hai

function Contact() {
  return (
    <>
      <div className="contact-container" id="contact">
        <h2 className="contact">
          <span>Contact </span> US
        </h2>
      </div>

      <div className="container-form">
        <div className="form">
          <h3 className="form-contact">CONTACT US</h3>
          <form
            action="/api/v1/login"
            method="post"
            onSubmit="return validateForm()"
            encType="application/x-www-form-urlencoded"
          >
            <input
              type="text"
              placeholder="Enter your Name"
              id="username"
              name="name"
            />
            <br />
            <input
              type="email"
              placeholder="Enter your valid email address"
              id="email"
              name="email"
            />
            <br />
            <textarea
              placeholder="Enter your message"
              id="message"
              name="message"
            />
            <br />
            <button className="submit-btn" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
        <div className="box">
          <div className="info-item">
            <i className="icons fa-solid fa-phone"></i> <span>CALL US</span>
          </div>
          <p className="same-p-tag1">1(234) 567-891, 1(234) 987-654</p>

          <div className="info-item">
            <i className="icons fa-solid fa-location-dot"></i>{" "}
            <span>LOCATION</span>
          </div>
          <p className="same-p-tag2">
            121 Rock Sreet, 21 Avenue, Rajasthan NY 7432-2983
          </p>

          <div className="info-item">
            <i className="icons fa-solid fa-stopwatch"></i>{" "}
            <span>BUSINESS HOURS</span>
          </div>
          <p className="same-p-tag3">
            Mon-Fri ..... 10 am - 8 pm, Sat, Sun ...... Closed
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
