import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-container">
      {/* HEADER */}
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
            <h2>
              Khadeeja Shabaana, <span>( Principal )</span>
            </h2>
            <Link to='/principal' className="button">About Our Principal</Link>
          </div>
        </div>
      </div>

      {/* EXPERIENCE DIV */}
      <div className="experience-container">
        <div className="experience-left">
          <h2>40 Years of Experience</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ipsum ac elit venenatis
            auctor tellus feugiat in. Purus scelerisque velit facilisis a.
            Viverra at eleifend magna felis in at tristique. Vestibulum diam
            pellentesque non nunc at. Proin tellus id aliquam neque dignissim.
            Elit enim elit diam tempus urna. Nunc sed a lectus a sit. Et arcu
            orci fringilla vitae sapien vestibulum.
            <br />
            <br />
            Faucibus vivamus risus ut purus bibendum lobortis egestas purus.
            Cursus egestas etiam suscipit morbi duis sem. Mauris ullamcorper
            rhoncus libero sit a facilisi. Pellentesque eget donec amet
            venenatis felis eleifend scelerisque mi. Tincidunt quis molestie
            amet tincidunt diam quis feugiat dolor. Facilisis sed etiam diam
            quis sodales pretium lacus gravida purus. Eleifend orci.
            <br />
            <br />
            Purus scelerisque velit facilisis a. Viverra at eleifend magna felis
            in at tristique. Vestibulum diam pellentesque non nunc at. Proin
            tellus id aliquam neque dignissim. Elit enim elit diam tempus urna.
            Nunc sed a lectus a sit. Et arcu orci fringilla vitae sapien
            vestibulum.
          </p>
        </div>
        <div className="experience-right"></div>
      </div>

      {/* DEPUTY DIV */}
      <div className="deputy-container">
        <div className="deputy-left"></div>
        <div className="deputy-right">
          <h2>Meet Our Deputy</h2>
          <hr />
          <p>
            <span>Olivia Henderson</span>, the steadfast leader at
            Majiwe Vista Academy. With a wealth of experience in education and a
            genuine passion for nurturing young minds, Ms. Henderson plays a
            pivotal role in shaping the academic landscape of the academy. Her
            approachable demeanor and unwavering commitment to fostering a
            supportive learning environment have earned her the respect and
            admiration of both students and colleagues alike. Known for her
            innovative ideas and dedication to academic excellence, Deputy
            Principal Henderson works collaboratively with the teaching staff to
            implement progressive educational strategies. Under her guidance,
            Majiwe Vista Academy continues to thrive as a hub of knowledge,
            curiosity, and personal growth.
          </p>
        </div>
      </div>

      {/* STUDENT LEADERS */}
      <div className="student-leaders"></div>

      {/* CONTACT US */}
      <div className="contact-us">
        <h2>Contact Is Today</h2>
        <hr />
        <p>Find out how we can develop your child's skills and expand their horizons for a life of success</p>
        <br />
        <Link to='/contact' className="contact-us-btn">ENQUIRE NOW</Link>
      </div>
    </div>
  );
}
