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

{/*--------------------------------RECOMMENDATIONS-LINKS-ICONS-----------------------------------*/}
  const headerRecommendations = [
    "Recommendation1",
    "Recommendation2",
    "Recommendation3",
    "Recommendation4",
  ];
  const headerNav = [
    { name: "Login", link: "/login" },
    { name: "Favourites", link: "/favourites" },
    { name: "Cart", link: "/cart" },
  ];
  const headerIcons = {
    Login: "fa-solid fa-user",
    Favourites: "fa-solid fa-heart",
    Cart: "fa-solid fa-cart-shopping",
  };

{/*--------------------------------SEARCH-BAR-----------------------------------*/}
  const handleFavCartLogClick = (item) => {
    navigate(item.link)
  }
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
    if (e.key === "Escape") {
      handleSearchClose(e);
    } else if (e.key === "Enter" && searchQuery.trim(e) !== "") {
      navigate(`/product-page/${e.toLowerCase()}`);
    }
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
        setIsDropdownVisible(false);
        setIsSearchExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleClearSearch = () => {
    setSearchQuery("");
  };
  const filteredRecommendations = searchQuery ? [searchQuery,...headerRecommendations.filter(item =>
      item.toLowerCase().includes(searchQuery.toLowerCase()) && item.toLowerCase() !== searchQuery.toLowerCase())]
  : headerRecommendations;

  return (
    <div className="header">
      <div className={`headerDarkOverlay ${isSearchExpanded ? "clicked" : ""}`} />
      <Link to="/">
        <img className="headerLogo" src={logo} alt="freshBalance" />
      </Link>
      {/*--------------------------------SEARCH-BAR-----------------------------------*/}
      <div className="headerSearchBox" onClick={handleSearchBoxClick} ref={searchBoxRef}>
        <div className={`headerSearchBox2 ${isSearchExpanded ? "clicked" : ""}`} onClick={handleSearchBoxClick} ref={searchBoxRef}>
        <i className="fa-solid fa-magnifying-glass" onClick={() => {
          const trimmedQuery = searchQuery.trim().toLowerCase();
          if (trimmedQuery !== "") 
            {
              navigate(`/product-page/${trimmedQuery}`);
            }
          }}></i>
        <input ref={searchInputRef} className="headerSearchBar" placeholder="Search..." value={searchQuery} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
        <i className={`fa-solid fa-x ${isSearchExpanded ? "clicked" : ""}`} onClick={handleClearSearch}/>
        </div>
        {/*--------------------------------DROP-DOWN-----------------------------------*/}
        <ul className="headerSearchDropdown">
          {filteredRecommendations.map((item, index) => (
              <li className="headerRecommendations" key={index} onClick={() => {setSearchQuery(item); navigate(`/product-page/${item.toLowerCase()}`)}}>
                {item}
              </li>
            ))}
        </ul>
      </div>
      {/*--------------------------------FAV-CART-LOG-----------------------------------*/}
      <ul className="headerFavCartLog">
        {headerNav.map((item, index) => (
          <li key={index} className={`headerNavElement ${location.pathname === item.link ? "active" : ""}`} onClick={() => handleFavCartLogClick(item)}>
            <Link to={item.link}>
              {headerIcons[item.name] && <i className={headerIcons[item.name]}></i>}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
