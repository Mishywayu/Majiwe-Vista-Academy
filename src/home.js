import React from "react";
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      {/* HOME HEADER */}
      <div className="home-header">
        <div className="home-left"></div>
        <div className="home-right">
          <h1>WELCOME</h1>
          {/* <p>
            We are a learning community dedicated to inspiring success and
            nurturing well-being, education excellence is at the heart of all we
            do because we believe that everyone deserves th best possible
            future.
          </p> */}
        </div>
      </div>

      {/* SECOND DIV */}
      <div className="home-content1">
        <div className="content1-left">
          <h1>Welcome to Majiwe Vista Academy</h1>
          <hr />
          <p>
            Majiwe Vista Academy stands as a distinguished international school
            in Kneya, uniquely combining elements from both the Kenyan and South
            Africa education systems. Recognized for its innovative approach to
            education, the academy places a strong emphasis on individualized
            learning. Students at Majiwe Vista are encouraged to explore their
            interests, while dedicated teachers adapt their to cater to each
            student's specific needs.
            <br />
            <br />
            In addition to its academic focus, the academy embraces a
            student-centric environment with generous recess times and a less
            stressful, more balanced overall approach to education. This
            intentional focus on student well-being has been linked to high
            levels of happiness among students and remarkable academic
            achievements.
            <br />
            <br />
            Majiwe Vista Academy, with its fusion of Kenyan and South African
            educational practices, stands out as a beacon of quality education,
            providing a nurturing and enriching environment for students to
            thrive.
          </p>
        </div>
        <div className="content1-right"></div>
      </div>

      {/* GRID ITEMS */}
      <div className="icons">
        <div className="students">
          <img
            src="/images/students.png"
            alt=""
            className="pl-20"
          />
          <h2 className="text-white text-center text-4xl">300+</h2>
          <p className="text-white text-center">Students</p>
        </div>
        <div className="staff">
          <img src="/images/staff.png" alt="" className="pl-20" />
          <h2 className="text-white text-center text-4xl">45+</h2>
          <p className="text-white text-center">Predaogical Staff</p>
        </div>
        <div className="nationalities">
          <img src="/images/nationalities.png" alt="" className="pl-20" />
          <h2 className="text-white text-center text-4xl">13+</h2>
          <p className="text-white text-center">Nationalities</p>
        </div>
        <div className="educators">
          <img src="/images/educators.png" alt="" className="pl-16" />
          <h2 className="text-white text-center text-4xl">20+</h2>
          <p className="text-white text-center">Educators</p>
        </div>
        <div className="ratio">
          <img src="/images/ratio.png" alt="" className="pl-20" />
          <h2 className="text-white text-center text-4xl">1 : 16</h2>
          <p className="text-white text-center">
            Ration of esucators Per Students
          </p>
        </div>
      </div>

      {/* CONTACT US */}
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
