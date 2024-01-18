import React from "react";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <div className="about-left"></div>
        <div className="about-right">
          <h1>ABOUT OUR SCHOOL</h1>
        </div>
      </div>

      {/* A WORD FROM THE PRINCIPAL */}
      <div className="about-principal">
        <h1>A Word From Our Principal</h1>
        <hr />
        <div className="principal-container">
          <div className="principal-left"></div>
          <div className="principal-right">
            <p>
              I am delighted to extend a warm welcome to you all as the proud
              principal of Majiwe Vista Academy. It is both an honor and a
              privilege to be a part of this vibrant learning community, where
              every day is an opportunity for growth, discovery, and excellence.
              <br />
              <br />
              Allow me to share a bit about myself. I come to Majiwe Vista with
              a deep passion for education and a firm belief in the
              transformative power it holds. My journey in the field of
              education has been guided by the conviction that every student has
              the potential to shine, given the right environment and support.
              As your principal, I am committed to fostering an atmosphere where
              students feel inspired, challenged, and empowered to reach their
              highest aspirations . . . .
            </p>
            <h2>Khadeeja Shabaana, <span>( Principal )</span></h2>
            <button>About Our Principal</button>
          </div>
        </div>
      </div>
    </div>
  );
}
