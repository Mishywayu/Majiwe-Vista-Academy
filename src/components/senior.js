import React from "react";
import { Link } from "react-router-dom";

export default function Senior() {
  return (
    <div>
      <div className="vacancy-container">
        <div className="vacancy-content">
          <h1>Curriculmn Coming Soon!</h1>
          <div className="vacancy-link">
            <Link to="/curriculumn" className="link">Back to home</Link>
          </div>
          <div className="vacancy-image">
            <div></div>
          </div>
        </div>
      </div>
      <div className="contact-us">
        <h2>Contact Us Today</h2>
        <hr />
        <p>
          Find out how we can develop your child's skills and expand their
          horizons for a life of success
        </p>
        <br />
        <Link to="/contact" className="contact-us-btn">
          ENQUIRE NOW
        </Link>
      </div>
    </div>
  );
}
