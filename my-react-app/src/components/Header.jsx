import React, { useState, useRef } from 'react';
import logo from "../images/freshBalance.png";
import "./Header.css";
import { Link } from 'react-router-dom';

export default function Header() {
  const [clickedItem, setClickedItem] = useState(null);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const searchInputRef = useRef(null);

  const handleSearchBoxClick = () => {
    setIsSearchExpanded(!isSearchExpanded);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };
  const handleItemClick = (item) => {
    setClickedItem(item);
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="freshBalance" />
      </Link>
      <div className={`search-box ${isSearchExpanded ? '.expanded' : ''}`} onClick={handleSearchBoxClick}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input ref={searchInputRef} className="search-bar" placeholder="Search"/>
      </div>
      <div className="login" onClick={() => handleItemClick('login')}>
        <Link to="/login" className={clickedItem === 'login' ? 'clicked' : ''}>
          <i className="fa-solid fa-user"></i>Login
        </Link>
      </div>
      <div className="favorites" onClick={() => handleItemClick('favorites')}>
        <Link to="/favourites" className={clickedItem === 'favorites' ? 'clicked' : ''}>
          <i className="fa-solid fa-heart"></i>Favorites
        </Link>
      </div>
      <div className="cart" onClick={() => handleItemClick('cart')}>
        <Link to="/cart" className={clickedItem === 'cart' ? 'clicked' : ''}>
          <i className="fa-solid fa-cart-shopping"></i>Cart
        </Link>
      </div>
    </header>
  );
}
