import React from "react";
import './App.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./home";
import Carousel from "./components/carousel";
// import About from "./about";
// import Curriculumn from "./curriculumn";
// import Careers from "./careers";
// import Contact from "./contact";

export default function App() {
  return (
    <div className="App">
      <Carousel />
      {/* <Home /> */}
      {/* <Router>
        <nav className="flex items-center justify-center p-4">
          {/* LOGO */}
          {/* <img src="/images/Majiwe-logo.png" alt="Logo" className="w-56" /> */}

          {/* MENU ITEMS */}
          {/* <ul className="flex space-x-6 text-sm text-black">
            <li className="pt-2">
              <Link to="/">HOME</Link>
            </li>
            <li className="pt-2">
              <Link to="/about">ABOUT OUR SCHOOL</Link>
            </li>
            <li className="pt-2">
              <Link to="/curriculumn">CURRICULUMN</Link>
            </li>
            <li className="pt-2">
              <Link to="/careers">CAREERS</Link>
            </li>
            <li className="bg-red-200 p-2 rounded-3xl">
              <Link to="/contact">Enquire Now</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/curriculumn" element={<Curriculumn />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Router> */}
    </div>
  );
}