import React, { useState } from "react";
import Map from "./components/map";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;

    const userName = form.elements["user_name"].value;
    const userEmail = form.elements["user_email"].value;
    const userMessage = form.elements["user_message"].value;

    const templateParams = {
      user_name: userName,
      user_email: userEmail,
      user_message: userMessage,
    };

    emailjs
      .send(
        "service_sh4lb4l",
        "template_bnsfajb",
        templateParams,
        "C2TnqMGvXbU-we2bW"
      )
      .then(
        (result) => {
          setMessageSent(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      {/* HEADER */}
      <div className="contact-header">
        <div className="contact-left"></div>
        <div className="contact-right">
          <h1>INQUIRIES</h1>
        </div>
      </div>

      {/* FORM DIV */}
      <div className="form-div">
        <p className="p">
          We are delighted to provide further insights into the enriching
          learning environment at Majiwe Vista Academy and eagerly anticipate
          the opportunity to connect with your family. To obtain additional
          information, please complete the inquiry form below or reach out to us
          using the contact details provided.
        </p>
        <div className="form">
          <div className="form-left">
            <h1>Interested in joining our academic community?</h1>
            <hr />
            <p>
              <span>Address</span>
              <br />
              P.O.BOX 11895-00100
            </p>

            <p>
              <span>Phone</span>
              <br />
              +254723251009
            </p>

            <p>
              <span>Email</span>
              <br />
              majiwevista@academy.co.ke
            </p>
          </div>
          <div className="form-right">
            <form onSubmit={sendEmail}>
              <div className="name">
                <label>Your Name*</label>
                <input type="text" name="user_name" required />
              </div>

              <div className="email pt-2">
                <label>Email*</label>
                <input type="email" name="user_email" required />
              </div>

              <div className="message pt-2">
                <label>Message*</label>
                <textarea name="user_message" required></textarea>
              </div>
              <button className="button rounded-3xl" type="submit" value="Send">
                Send Message
              </button>
              {messageSent && (
                <p className="message-sent">Message sent successfully!</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="map-area">
        <div className="map">
          <Map />
        </div>
      </div>
    </div>
  );
}
