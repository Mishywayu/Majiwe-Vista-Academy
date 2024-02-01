import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Curriculumn from "./curriculumn";
import Careers from "./careers";
import Contact from "./contact";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <Router>
        <nav className="flex items-center justify-center">
          {/* LOGO */}
          <img src="/images/Majiwe-logo.png" alt="Logo" className="w-48 mr-80" />

          {/* MENU ITEMS */}
          <ul className="flex space-x-7 text-sm text-black">
            <li className="pt-2 text">
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
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}
