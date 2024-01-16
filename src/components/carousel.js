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
        <div className="image-container">
          <img src="your_image_url_1" alt="Image 1" />
        </div>
        <div className="content-container">
          <h2>Slide 1</h2>
          <p>Some text for the first slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="image-container">
          <img src="your_image_url_2" alt="Image 2" />
        </div>
        <div className="content-container">
          <h2>Slide 2</h2>
          <p>Some text for the second slide.</p>
        </div>
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default Carousel;
// export default function Carousel() {
//   return (
//     <div>
//       carousel
//     </div>
//   )
// }
