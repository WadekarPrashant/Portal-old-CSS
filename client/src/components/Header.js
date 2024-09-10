import React from "react";
import "./Header.css";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleStudentLogin = () => {
    navigate("/student/login");
  };

  const handleAdminLogin = () => {
    navigate("/signup");
  };

  return (
    <header className="header">
      <div>
        <img src="https://vidyarthimitra.org/frontend_assets/new_images/vmlogo1.png" className="logo" />
      </div>
      <nav className="nav">
        <a href="#Home">Home</a>
        <a href="#Contact">Contact Us</a>
        <a href="#About">About us</a>
      </nav>
      <div className="buttons">
        <button className="btn get-in-touch" onClick={handleStudentLogin}>
          Login as Student
        </button>
        <button className="btn request-delivery" onClick={handleAdminLogin}>
          Login as Admin
        </button>
      </div>
    </header>
  );
};

export default Header;
