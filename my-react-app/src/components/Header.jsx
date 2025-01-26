import React, { useState, useRef } from 'react';
import logo from "../images/freshBalance.png";
import "./Header.css";
import { Link } from 'react-router-dom';

export default function Header() {
  const [clickedItem, setClickedItem] = useState(null);

  const searchInputRef = useRef(null);

  const handleSearchBoxClick = () => {
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
      <div className="search-box" onClick={handleSearchBoxClick}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input ref={searchInputRef} className="search-bar" placeholder="Search" />
      </div>
      <div className="login">
        <Link to="/login" className={clickedItem === 'login' ? 'clicked' : ''} onClick={() => handleItemClick('login')} >
          <i className="fa-solid fa-user"></i>Login
        </Link>
      </div>
      <div className="favorites">
        <Link to="/favourites" className={clickedItem === 'favorites' ? 'clicked' : ''} onClick={() => handleItemClick('favorites')} >
          <i className="fa-solid fa-heart"></i>Favorites
        </Link>
      </div>
      <div className="cart">
        <Link to="/cart" className={clickedItem === 'cart' ? 'clicked' : ''} onClick={() => handleItemClick('cart')} >
          <i className="fa-solid fa-cart-shopping"></i>Cart
        </Link>
      </div>
    </header>
  );
}
