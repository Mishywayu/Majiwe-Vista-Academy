import React from "react";
import { Link } from "react-router-dom";

export default function Careers() {
  return (
    <div className="careers-contanier">
      {/* HEADER */}
      <div className="careers-header">
        <div className="careers-left"></div>
        <div className="careers-right">
          <h1>CAREERS</h1>
        </div>
      </div>

      {/* MILLICENT SHABAANA */}
      <div className="millicent-container">
        <div className="millicent-left"></div>
        <div className="millicent-right">
          <h1>
            Millicent Shabaana, <span>Class Teacher</span>
          </h1>
          <p>
            Teaching at MVA has been nothing like I have ever experienced
            before! As a teacher, I have always craved to go beyond the
            restrictions of set plans and books and cater to the needs of my
            students. I now have the flexibility and the freedom to make
            learning meaningful, innovative, and enjoyable for my students. I am
            now more able to integrate into my teaching many skills that they
            will require in the future such as collaborative and critical
            thinking skills. Working under the guidance of the great leadership
            of MVA and with its fantastic team of teachers has helped me
            immensely to grow and flourish as a teacher. MVA has brought a
            positive revolution in the education system of my home country and I
            am very proud to be a part of it!
          </p>
        </div>
      </div>

      {/* OTHER TEACHERS */}
      <div className="others-container">
        <div className="others-left">
          <div className="others-left-left"></div>
          <div className="others-left-right">
            <h2>
              Hanna Nomalanga, <span>Class Teacher Grade 3</span>
            </h2>
            <p>
              I’m proud of our team. I and my two local colleagues make a great
              and supportive team, and I value our attitude and willingness to
              grow as a team. We trust and respect each other.
            </p>
            <Link to='/hanna' className="button">Learn More</Link>
          </div>
        </div>
        <div className="others-right">
          <div className="others-right-left"></div>
          <div className="others-right-right">
            <h2>
              Tuuli Moraa, <span>Class Teacher Grade 7</span>
            </h2>
            <p>
              "I’m happy to be part of this community where learning is not only
              for the students, but also for teachers who are willing to develop
              themselves professionally"
            </p>
            <Link to='/tuuli' className="button">Learn More</Link>
          </div>
        </div>
      </div>

      {/* OPPORTUNITIES DIV */}
      <div className="opportunities-container">
        <p>
          MVA offers world class education inspired by the South African and
          Kenyan education systems where trust in the teaching profession
          facilitate autonomy of teachers to make sure we always keep learning
          and well-being of children at the heart of our story.
          <br />
          <br />
          We invite teachers who share our values to be part of the MVA learning community.
        </p>
        <Link to='/vacancies' className="vacancies">CLICK HERE TO EXPLORE JOB VACANCIES AT MVA</Link>
      </div>
    </div>
  );
}
