import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot-container">
        <div className="footer-content">
          <div className="footer-column">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>
                <a href="https://vidyarthimitra.org/universities">Universities</a>
              </li>
              <li>
                <a href="https://vidyarthimitra.org/colleges">Colleges</a>
              </li>
              <li>
                <a href="https://vidyarthimitra.org/courses">Courses</a>
              </li>
              <li>
                <a href="https://vidyarthimitra.org/entrance_exams">Entrance Exam</a>
              </li>
              <li>
                <a href="https://vidyarthimitra.org/rank_predictor/rank_predictor">Rank Prediction</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>OUR PRODUCTS</h4>
            <ul>
              <li>
                <a href="https://epaper.vidyarthimitra.org/">Epaper</a>
              </li>
              <li>
                <a href="https://test.vidyarthimitra.org/">Career Assessment Test</a>
              </li>
              <li>
                <a href="https://cutoff.vidyarthimitra.org/">Cut-off's</a>
              </li>
              <li>
                <a href="https://vidyarthimitra.org/news_category/Jobs">Govt & Private Jobs</a>
              </li>
              <li>
                <a href="https://mockexam.vidyarthimitra.org/">Practice Test</a>
              </li>
              <li>
                <a href="https://studyabroad.vidyarthimitra.org/">Study Abroad</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>ENTRANCE EXAM</h4>
            <ul>
              <li>
                <a href="https://goo.gl/u9gj4o">MHT-CET</a>
              </li>
              <li>
                <a href="https://goo.gl/gBdyF8">JEE Main</a>
              </li>
              <li>
                <a href="https://goo.gl/L86qhM">JEE-Advanced</a>
              </li>
              <li>
                <a href="https://goo.gl/8MyGoc">NEET UG</a>
              </li>
              <li>
                <a href="https://goo.gl/M3f9Ph">NEET PG</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com/VidyarthiMitra.org/">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://x.com/Vidyarthimitra">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/vidyarthi_mitra/">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/vidyarthi-mitra-0aba1911b/?originalSubdomain=in">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href="tel:7720025900">+91 77200 25900</a>
              </li>
              <li>
                <a href="tel:7720081400">+91 77200 81400</a>
              </li>
              <li>
                <a href="mailto:contact@vidyarthimitra.org">contact@vidyartimitra.org</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>© 2024 Vidyarthimitra Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
