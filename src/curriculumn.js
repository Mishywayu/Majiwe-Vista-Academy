import React from "react";
import { Link } from "react-router-dom";

export default function Curriculumn() {
  return (
    <div className="curriculumn-container">
      {/* HEADER */}
      <div className="curriculumn-header">
        <div className="curriculumn-left"></div>
        <div className="curriculumn-right">
          <h1>CURRICULUMN</h1>
        </div>
      </div>

      {/* JUNIOR SCHOOL */}
      <div className="junior-container">
        <div className="junior-left">
          <h2>Junior School Curriculumn</h2>
          <p>
            The junior school curriculum at Majiwe Vista Academy is thoughtfully
            designed to provide a well-rounded and comprehensive educational
            experience for our young learners. Anchored in a holistic approach,
            our curriculum focuses on developing foundational skills across
            various subjects, fostering critical thinking, and promoting a love
            for learning. In English language arts, students engage in language
            development, reading comprehension, and creative writing activities.
            Mathematics instruction is structured to build a strong numerical
            foundation, emphasizing problem-solving and logical reasoning. The
            sciences are introduced through hands-on experiments and
            exploration, while social studies cover a broad range of topics to
            cultivate global awareness . . . .
          </p>
          <Link to='/junior' className="button">Read More</Link>
        </div>
        <div className="junior-right"></div>
      </div>

      {/* SENIOR SCHOOL */}
      <div className="senior-container">
        <div className="senior-left"></div>
        <div className="senior-right">
          <h2>Senior School Curriculumn</h2>
          <p>
            The senior school curriculum at Majiwe Vista Academy is tailored to
            provide a rigorous and comprehensive educational experience that
            prepares students for higher education and beyond. Building upon the
            foundation established in the junior school, the curriculum is
            designed to be challenging, dynamic, and responsive to the evolving
            needs of students as they approach the final years of their
            secondary education.
          </p>
          <Link to='/senior' className="button">Read More</Link>
        </div>
      </div>

      {/* TYPICAL DAY */}
      <div className="typical-day">
        <div className="h1">
          <h1>TYPICAL DAY</h1>
        </div>

        {/* GRID */}
        <div className="grid-container">
          <div className="grid-item-1 bg-red-300"></div>
          <div className="grid-item grid-item-2">
            <h2>Individual timetables</h2>
            <p>
              We all don't arrive to the school at the same time, since we have
              individual timetables for each class
            </p>
          </div>
          <div className="grid-item grid-item-3">
            <h2>Collaboration</h2>
            <p>
              Two classes are combined together. Learning takes place in open
              learning environments.
            </p>
          </div>
          <div className="grid-item-4 bg-red-300"></div>
          <div className="grid-item-5 bg-red-300"></div>
          <div className="grid-item grid-item-6">
            <h2>Team teaching</h2>
            <p>
              Two Maldivian teachers and one Finnish teacher team teach and
              divide the group of students into study groups according to
              students’ needs and goals of the tasks.
            </p>
          </div>
          <div className="grid-item grid-item-7">
            <h2>Breaks</h2>
            <p>
              In between the lessons we have breaks for activities and fun. Our
              students are also encourage to bring healthy lunch to the school
            </p>
          </div>
          <div className="grid-item-8 bg-red-300"></div>
        </div>

        {/* CONTACT US */}
        <div className="contact-us">
          <h2>Contact Is Today</h2>
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
    </div>
  );
}
