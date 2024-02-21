import React from "react";
import { Link } from "react-router-dom";

export default function Principal() {
  return (
    <div>
    <div className="principal-page">
      <div className="principal-bio">
        <h1>About Me</h1>
        <p className="bio">
          My motto embodies a commitment to embracing both creativity and
          quantitative reasoning, fostering an environment where innovation
          thrives. I strive to empower our students to excel in all aspects of
          their lives.
        </p>
        <hr />
        <div className="principal-profile">
          <div className="profile-left"></div>
          <div className="profile-right"></div>
        </div>
        <div className="biography">
          <h2>Khadeeja Shabaana</h2>
          <p>
            <span>Experience at Majiwe Vista Academy:</span>
            <br />
            <br />
            In 2001, Khadeeja Shabaana joined Majiwe Vista Academy as a
            mathematics teacher. His arrival brought a fresh perspective to the
            institution, and he soon became known for his dynamic teaching style
            and his unwavering commitment to student success. Over the years,
            Shabaana took on increasing responsibilities within the school,
            serving as head of the mathematics department before eventually
            being appointed as the principal in 2015. As principal, Shabaana has
            been instrumental in shaping the vision and direction of Majiwe
            Vista Academy. Under his leadership, the school has experienced
            significant growth and development, both academically and
            infrastructurally. Shabaana has implemented several initiatives
            aimed at enhancing the quality of education offered at the academy,
            including the introduction of new technology in the classroom, the
            expansion of extracurricular programs, and the establishment of
            partnerships with local businesses and community organizations.
            Shabaana's impact extends beyond the confines of the school grounds.
            He is actively involved in community outreach efforts, advocating
            for the importance of education and providing support to underserved
            youth in the surrounding area. His dedication to improving the lives
            of others has earned him the respect and admiration of students,
            parents, and colleagues alike.
            <br />
            <br />
            <span>Legacy:</span>
            <br />
            <br />
            As Principal of Majiwe Vista Academy, Khadeeja Shabaana has left an
            indelible mark on the institution and the countless lives he has
            touched. His unwavering commitment to excellence, coupled with his
            compassionate leadership style, serves as an inspiration to all who
            have the privilege of knowing him. As he continues to lead Majiwe
            Vista Academy into the future, Khadeeja Shabaana remains dedicated to his
            mission of empowering the next generation of leaders and
            changemakers.
          </p>
        </div>
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
