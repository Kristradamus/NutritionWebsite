import "./Navigation.css"
import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const catToggleRef = useRef(null);
  const dropContentRef = useRef(null);

  const handleCategoryToggle = (e) => {
    e.preventDefault();
    setIsDropdownVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        dropContentRef.current &&
        !dropContentRef.current.contains(e.target) &&
        catToggleRef.current &&
        !catToggleRef.current.contains(e.target)
      ) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="navigation">
      <ul className="menu">
        <li className="dropdown">
          <a ref={catToggleRef} className="categories-toggle" href="#" onClick={handleCategoryToggle}>
            <i className="fa-solid fa-bars"></i> CATEGORIES
          </a>
          <ul ref={dropContentRef} className={`dropdown-content ${isDropdownVisible ? "show" : ""}`}>
            <li><a href="#">TOP products</a></li>
            <li><a href="#">Promotions</a></li>
            <li><a href="#">Bio</a></li>
            <li><a href="#">Protein & Amino acids</a></li>
            <li><a href="#">Vitamins & Minerals</a></li>
            <li><a href="#">Performance enhancers</a></li>
            <li><a href="#">Weight management</a></li>
            <li><a href="#">Cosmetics</a></li>
          </ul>
        </li>
        <li><Link className="aboutUs" to="/about-us">ABOUT US</Link></li>
        <li><Link className="services" to="/services">SERVICES</Link></li>
        <li><Link className="subscriptions" to="/subscriptions">SUBSCRIPTIONS</Link></li>
        <li><Link className="communities" to="/communities">COMMUNITIES</Link></li>
      </ul>
      <div className="support">
        <ul className="menu">
          <li><Link className="support" to="/support"><i className="fa-solid fa-headset"></i>SUPPORT</Link></li>
        </ul>
      </div>
    </nav>
  );
} 