import React, { useState } from "react";
import "./App.css";
import "./responsive.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Curriculumn from "./curriculumn";
import Careers from "./careers";
import Contact from "./contact";
import Footer from "./components/footer";
import Principal from "./components/principal";

export default function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  function handleMenuBtnClick() {
    setMenuVisible((prev) => !prev);
  }

  return (
    <div className="App">
      <Router>
        <nav className="flex items-center fixed">
          {/* LOGO */}
          <img
            src="/images/Majiwe-logo.png"
            alt="Logo"
            className="w-48 mr-80"
          />
          <button className="menu-btn" onClick={handleMenuBtnClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
          {/* MENU ITEMS */}
          <ul className={`flex space-x-7 text-sm menu ${menuVisible ? "menu-visible" : ""}`}>
            <li className="pt-2 text text-home">
              <Link to="/">HOME</Link>
            </li>
            <li className="pt-2 text">
              <Link to="/about">ABOUT OUR SCHOOL</Link>
            </li>
            <li className="pt-2 text">
              <Link to="/curriculumn">CURRICULUMN</Link>
            </li>
            <li className="pt-2 text">
              <Link to="/careers">CAREERS</Link>
            </li>
            <li className="bg-white p-2 w-32 text-center rounded-3xl contact-btn">
              <Link to="/contact">Enquire Now</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/curriculumn" element={<Curriculumn />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/principal" element={<Principal />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}
