import React, { useState, useRef, useEffect } from "react";
import logo from "../images/freshBalance.png";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [clickedItem, setClickedItem] = useState(null);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const searchInputRef = useRef(null);
  const searchBoxRef = useRef(null);
  
  const recommendations = [
    "Recommendation1",
    "Recommendation1",
    "Recommendation2",
    "Recommendation3",
    "Recommendation4",
    "Recommendation4",
    "Recommendation2",
  ];

  const handleSearchBoxClick = () => {
    setIsSearchExpanded(true);
    setIsDropdownVisible(true);
    searchInputRef.current?.focus();
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setIsDropdownVisible(e.target.value.length > 0);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsSearchExpanded(false);
      setIsDropdownVisible(false);
      setSearchQuery("");
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
        setIsSearchExpanded(false);
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="header">
      <Link to="/">
        <img className="headerLogo" src={logo} alt="freshBalance" />
      </Link>

      <div className={`headerSearchBox ${isSearchExpanded ? "expanded" : ""}`} onClick={handleSearchBoxClick} ref={searchBoxRef}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input ref={searchInputRef} className="headerSearchBar" placeholder="Search" value={searchQuery} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
        {isDropdownVisible && (
          <ul className="headerSearchDropdown">
            {recommendations.filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((item, index) => (
                <li key={index} onClick={() => setSearchQuery(item)}>
                  {item}
                </li>
              ))}
          </ul>
        )}
      </div>

      <div className="headerLogin" onClick={() => setClickedItem("login")}>
        <Link to="/login" className={clickedItem === "login" ? "clicked" : ""}>
          <i className="fa-solid fa-user"></i>Login
        </Link>
      </div>
      <div className="headerFavorites" onClick={() => setClickedItem("favorites")}>
        <Link to="/favourites" className={clickedItem === "favorites" ? "clicked" : ""}>
          <i className="fa-solid fa-heart"></i>Favorites
        </Link>
      </div>
      <div className="headerCart" onClick={() => setClickedItem("cart")}>
        <Link to="/cart" className={clickedItem === "cart" ? "clicked" : ""}>
          <i className="fa-solid fa-cart-shopping"></i>Cart
        </Link>
      </div>
    </div>
  );
}
