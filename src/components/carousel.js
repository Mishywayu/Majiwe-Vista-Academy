import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="carousel-item">
        <div className="item-content">
          <div className="circular-div"></div>
          <div className="text-div">
            <h2>Our Vision</h2>
            <hr />
            <p>
              Our vision is to create a dynamic and inclusive learning
              environment that promotes academic excellence, cultural
              appreciation, and the holistic development of students. We aspire
              to cultivate a community of lifelong learners who are
              well-prepared to thrive in a global context, equipped with
              critical thinking skills, cultural awareness, and a passion for
              making a positive impact in the world.
            </p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="item-content">
          <div className="circular-div2"></div>
          <div className="text-div">
            <h2>Our Mission</h2>
            <hr />
            <p>
              Majiwe Vista Academy envisions becoming a distinguished
              international school in Kenya, seamlessly blending the strengths
              of the Kenyan and South African education systems. Our vision is
              to create a dynamic and inclusive learning environment that
              promotes academic excellence, cultural appreciation, and the
              holistic development of students. We aspire to cultivate a
              community of lifelong learners who are well-prepared to thrive in
              a global context, equipped with critical thinking skills, cultural
              awareness, and a passion for making a positive impact in the
              world.
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
