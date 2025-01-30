import "./Navigation.css";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Best Sellers",
    subcategories: [
      { name: "Featured Products", link: "/product-page/featured-products" },
      { name: "Customer Favorites", link: "/product-page/customer-favorites" },
      { name: "Top Rated Products", link: "/product-page/top-rated-products" },
      { name: "New Arrivals", link: "/product-page/new-arrivals" },
      { name: "Trending Now", link: "/product-page/trending-now" },
      { name: "Must-Have Products", link: "/product-page/must-have-products" },
      { name: "Seasonal Specials", link: "/product-page/seasonal-specials" },
    ],
  },
  {
    name: "Promotions",
    subcategories: [
      { name: "Limited Time Offers", link: "/product-page/limited-time-offers" },
      { name: "Seasonal Sales", link: "/product-page/seasonal-sales" },
      { name: "Clearance Items", link: "/product-page/clearance-items" },
      { name: "Discounted Bundles", link: "/product-page/discounted-bundles" },
      { name: "Buy 1 Get 1 Free", link: "/product-page/buy-1-get-1-free" },
      { name: "Flash Sales", link: "/product-page/flash-sales" },
      { name: "Exclusive Discounts", link: "/product-page/exclusive-discounts" },
      { name: "Free Shipping Deals", link: "/product-page/free-shipping-deals" },
      { name: "Special Offers for Members", link: "/product-page/special-offers-for-members" },
    ],
  },
  {
    name: "Bio",
    subcategories: [
      { name: "Organic Products", link: "/product-page/organic-products" },
      { name: "Eco-Friendly Products", link: "/product-page/eco-friendly-products" },
      { name: "Plant-Based Supplements", link: "/product-page/plant-based-supplements" },
      { name: "Non-GMO Items", link: "/product-page/non-gmo-items" },
      { name: "Sustainable Brands", link: "/product-page/sustainable-brands" },
      { name: "Cruelty-Free Products", link: "/product-page/cruelty-free-products" },
      { name: "Natural Skincare", link: "/product-page/natural-skincare" },
      { name: "Herbal Remedies", link: "/product-page/herbal-remedies" },
    ],
  },
  {
    name: "Protein & Amino Acids",
    subcategories: [
      { name: "Whey Protein", link: "/product-page/whey-protein" },
      { name: "Plant-Based Protein", link: "/product-page/plant-based-protein" },
      { name: "Pre-Workout Protein", link: "/product-page/pre-workout-protein" },
      { name: "Post-Workout Recovery", link: "/product-page/post-workout-recovery" },
      { name: "Casein Protein", link: "/product-page/casein-protein" },
      { name: "Vegan Protein", link: "/product-page/vegan-protein" },
      { name: "Protein Shake & Bars", link: "/product-page/protein-shake-bars" },
      { name: "Amino Acid Supplements", link: "/product-page/amino-acid-supplements" },
      { name: "BCAA", link: "/product-page/bcaa" },
    ],
  },
  {
    name: "Vitamins & Minerals",
    subcategories: [
      { name: "Vitamin C", link: "/product-page/vit-c" },
      { name: "Vitamin D3", link: "/product-page/vit-d3" },
      { name: "Vitamin B12", link: "/product-page/vit-b12" },
      { name: "Multi-Vitamins", link: "/product-page/multi-vit" },
      { name: "Antioxidants", link: "/product-page/antioxidants" },
      { name: "Calcium", link: "/product-page/calcium" },
      { name: "Iron Supplements", link: "/product-page/iron-supplements" },
      { name: "Magnesium", link: "/product-page/magnesium" },
      { name: "Omega-3 Fish Oil", link: "/product-page/omega-3-fish-oil" },
      { name: "Probiotics", link: "/product-page/probiotics" },
    ],
  },
  {
    name: "Performance Enhancers",
    subcategories: [
      { name: "Pre-Workout Supplements", link: "/product-page/pre-workout-supplements" },
      { name: "Post-Workout Recovery", link: "/product-page/post-workout-recovery" },
      { name: "Energy Boosters", link: "/product-page/energy-boosters" },
      { name: "Muscle Mass Gainers", link: "/product-page/muscle-mass-gainers" },
      { name: "Endurance Supplements", link: "/product-page/endurance-supplements" },
      { name: "Creatine", link: "/product-page/creatine" },
      { name: "Nitric Oxide Boosters", link: "/product-page/nitric-oxide-boosters" },
      { name: "Focus & Cognitive Supplements", link: "/product-page/focus-cognitive-supplements" },
      { name: "Strength Enhancers", link: "/product-page/strength-enhancers" },
    ],
  },
  {
    name: "Weight Management",
    subcategories: [
      { name: "Fat Burners", link: "/product-page/fat-burners" },
      { name: "Appetite Suppressants", link: "/product-page/appetite-suppressants" },
      { name: "Low-Calorie Snacks", link: "/product-page/low-calorie-snacks" },
      { name: "Meal Replacement Shakes", link: "/product-page/meal-replacement-shakes" },
      { name: "Detox & Cleanse Products", link: "/product-page/detox-cleanse-products" },
      { name: "Weight Loss Supplements", link: "/product-page/weight-loss-supplements" },
      { name: "Healthy Weight Gain Products", link: "/product-page/healthy-weight-gain-products" },
      { name: "Metabolism Boosters", link: "/product-page/metabolism-boosters" },
      { name: "Keto Diet Products", link: "/product-page/keto-diet-products" },
      { name: "Low-Carb Snacks", link: "/product-page/low-carb-snacks" },
    ],
  },
  {
    name:"Cosmetics",
    subcategories: [
      {
        title: "Skin Care",
        items: [
          { name: "Moisturizers", link: "/product-page/moisturizers" },
          { name: "Face Masks", link: "/product-page/face-masks" },
          { name: "Anti-Aging Products", link: "/product-page/anti-aging-products" },
          { name: "Eye Creams", link: "/product-page/eye-creams" },
          { name: "Serums", link: "/product-page/serums" },
        ],
      },
      {
        title: "Hair Care",
        items: [
          { name: "Shampoo & Conditioner", link: "/product-page/shampoo-conditioner" },
          { name: "Hair Masks", link: "/product-page/hair-masks" },
          { name: "Hair Oils", link: "/product-page/hair-oils" },
          { name: "Hair Growth Products", link: "/product-page/hair-growth-products" },
        ],
      },
      {
        title: "Makeup",
        items: [
          { name: "Foundations", link: "/product-page/foundations" },
          { name: "Lipsticks", link: "/product-page/lipsticks" },
          { name: "Eyeshadow", link: "/product-page/eyeshadow" },
          { name: "Mascara", link: "/product-page/mascara" },
          { name: "Brushes & Tools", link: "/product-page/brushes-tools" },
        ],
      },
      {
        title: "Beauty Tools",
        items: [
          { name: "Face Rollers", link: "/product-page/face-rollers" },
          { name: "Dermaplaning Tools", link: "/product-page/dermaplaning-tools" },
          { name: "LED Masks", link: "/product-page/led-masks" },
        ],
      },
      {
        title: "Nail Care",
        items: [
          { name: "Nail Polish", link: "/product-page/nail-polish" },
          { name: "Nail Treatments", link: "/product-page/nail-treatments" },
          { name: "Cuticle Oils", link: "/product-page/cuticle-oils" },
        ],
      },
    ],
  },
];

const mainNavLinks = [
  { name: "ABOUT US", path: "/about-us" },
  { name: "SERVICES", path: "/services" },
  { name: "SUBSCRIPTIONS", path: "/subscriptions" },
  { name: "COMMUNITIES", path: "/communities" },
  { name: "SUPPORT", path: "/support" },
];

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
    <div className="navigation">
      <ul className="navMenu">
        <li className="navDropDown">
          <a ref={catToggleRef} className="navCatToggle" href="#" onClick={handleCategoryToggle}>
            <i className="fa-solid fa-bars"></i> CATEGORIES
          </a>
          <ul ref={dropContentRef} className={`navDropDown ${isDropdownVisible ? "show" : ""}`}>
            {categories.map((category, index) => (
              <li key={index}>
                <a href={category.link}>{category.name}</a>
                <ul className="navSubMenu">
                  <h2>{category.name}</h2>
                  {category.subcategories.map((subCategory, subIndex) =>
                    subCategory.items ? (
                      <div key={subIndex}>
                        <h3>{subCategory.title}</h3>
                        {subCategory.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link to={item.link}>{item.name}</Link>
                          </li>
                        ))}
                      </div>
                    ) : (
                      <li key={subIndex}>
                        <Link to={subCategory.link}>{subCategory.name}</Link>
                      </li>
                    )
                  )}
                </ul>
              </li>
            ))}
          </ul>
        </li>
{/*--------------------------------------MAIN-NAVIGATION-LINKS-------------------------------------------------*/}
        {mainNavLinks.map((item, index) => (
        <li className="navMenuElements" key={index}>
          <Link className="navMenuElements2" to={item.path}>
            {item.name === "SUPPORT" ? (<i className="fa-solid fa-headset"></i>) : null}
            {item.name}
          </Link>
        </li>
        ))}
      </ul>
    </div>
  );
}