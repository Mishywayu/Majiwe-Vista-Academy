import React, { useLayoutEffect, useRef, useState } from "react";
// import ReactDOM from "react-dom";
import Carousel from "./components/carousel";

export default function Home() {
  const [show, doShow] = useState({
    itemOne: false,
    itemTwo: false,
    itemThree: false,
  });

  const ourRef = useRef(null),
    anotherRef = useRef(null),
    refThree = useRef(null);

  useLayoutEffect(() => {
    const topPos = (element) => element.getBoundingClientRect().top;
    const h1Pos = topPos(ourRef.current),
      hrPos = topPos(anotherRef.current),
      pPos = topPos(refThree.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (h1Pos < scrollPos) {
        doShow((state) => ({ ...state, itemOne: true }));
      } else if (hrPos < scrollPos) {
        doShow((state) => ({ ...state, itemTwo: true }));
      } else if (pPos < scrollPos) {
        doShow((state) => ({ ...state, itemThree: true }));
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  return (
    <div className="home-container">
      {/* HOME HEADER */}
      <div className="home-header">
        <div className="home-left"></div>
        <div className="home-right">
          <h1>WELCOME</h1>
          <p>
            We are a learning community dedicated to inspiring success and
            nurturing well-being, education excellence is at the heart of all we
            do because we believe that everyone deserves th best possible
            future.
          </p>
        </div>
      </div>

      {/* SECOND DIV */}
      <div className="home-content1">
        <div className="content1-left">
          <h1
            style={{
              transform: `translateX(${show.itemOne ? "0" : "-100vw"})`,
              transition: "transform 1s",
            }}
            ref={ourRef}
          >
            Welcome to Majiwe Vista Academy
          </h1>
          <hr
            // style={{
            //   transform: `translateX(${show.itemTwo ? "0" : "-100vw"})`,
            //   transition: "transform 1s",
            // }}
            ref={anotherRef}
          />
          <p
            // style={{
            //   transform: `translateX(${show.itemThree ? "0" : "-100vw"})`,
            //   transition: "transform 1s",
            // }}
            ref={refThree}
          >
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

      {/* CAROUSEL DIV */}
      <Carousel />

      {/* ICONS DIV */}
      <div className="home-icons">
        <div>
          <img src="/images/diversity.png" alt="" />
          <h3>Diversity</h3>
        </div>
        <div>
          <img src="/images/active.png" alt="" />
          <h3>Active</h3>
        </div>
        <div>
          <img src="/images/open-mind.png" alt="" />
          <h3>Open-minded</h3>
        </div>
        <div>
          <img src="/images/trust.png" alt="" />
          <h3>Trustworthy</h3>
        </div>
      </div>
    </div>
  );
}
