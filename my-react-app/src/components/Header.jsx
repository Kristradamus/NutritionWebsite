import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../images/freshBalance.png";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const searchInputRef = useRef(null);
  const searchBoxRef = useRef(null);
  const location = useLocation();

  const recommendations = [
    "Recommendation1",
    "Recommendation1",
    "Recommendation2",
    "Recommendation3",
    "Recommendation4",
    "Recommendation4",
    "Recommendation2",
  ];

{/*--------------------------------FAV-CART-LOG-----------------------------------*/}
  const handleFavCartLogClick = (path, item) => {
    navigate(path);
  };
{/*--------------------------------SEARCH-BAR-----------------------------------*/}
  const handleSearchBoxClick = () => {
    setIsSearchExpanded(true);
    setIsDropdownVisible(true);
    searchInputRef.current?.focus();
  };
  const handleSearchClose = (e) => {
    if (e) e.stopPropagation();
    setIsSearchExpanded(false);
    setIsDropdownVisible(false);
    searchInputRef.current?.blur();
  };
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setIsDropdownVisible(e.target.value.length > 0);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Escape") 
    {
      handleSearchClose(e);
    }
    else if (e.key === "Enter" && searchQuery.trim() !== "") 
    {
      navigate("/product-page");
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) 
      {
        setIsDropdownVisible(false);
        setIsSearchExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="header">
    <div className={`headerDarkOverlay ${isSearchExpanded ? "clicked" : ""}`}/>
      <Link to="/">
        <img className="headerLogo" src={logo} alt="freshBalance" />
      </Link>
{/*--------------------------------SEARCH-BAR-----------------------------------*/}
      <div className={`headerSearchBox ${isSearchExpanded ? "clicked" : ""}`} onClick={handleSearchBoxClick} ref={searchBoxRef}>
      <Link to="/product-page">
      <i className="fa-solid fa-magnifying-glass"></i></Link>
      <input ref={searchInputRef} className="headerSearchBar" placeholder="Search" value={searchQuery} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
      <i className={`fa-solid fa-x ${isSearchExpanded ? "clicked" : ""}`} onClick={handleClearSearch}/>
{/*--------------------------------DROP-DOWN-----------------------------------*/}
        <ul className="headerSearchDropdown">
          {recommendations.filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase())).map((item, index) => (
            <li className="headerRecommendations" key={index} onClick={() => setSearchQuery(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
{/*--------------------------------FAV-CART-LOG-----------------------------------*/}
      <div className="FavCartLog">
      <div className={`headerLogin ${location.pathname === "/login" ? "active" : ""}`} onClick={() => handleFavCartLogClick("/login")}>
        <Link to="/login">
          <i className="fa-solid fa-user"></i>Login
        </Link>
      </div>
      <div className={`headerFavourites ${location.pathname === "/favourites" ? "active" : ""}`} onClick={() => handleFavCartLogClick("/favourites")}>
        <Link to="/favourites">
          <i className="fa-solid fa-heart"></i>Favorites
        </Link>
      </div>
      <div className={`headerCart ${location.pathname === "/cart" ? "active" : ""}`} onClick={() => handleFavCartLogClick("/cart")}>
        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>Cart
        </Link>
       </div>
      </div>
    </div>
  );
}
