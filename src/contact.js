import React from "react";

export default function Contact() {

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
            <form>
            <div className="name">
              <label>Your Name*</label>
              <input type="text" />
            </div>

            <div className="email">
              <label>Email*</label>
              <input type="email" />
            </div>

            <div className="message">
              <label>Message*</label>
              <textarea></textarea>
            </div>
            <button>Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="map-area"></div>
    </div>
  );
}