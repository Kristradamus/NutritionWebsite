import "./Footer.css";
import {Link} from "react-router-dom";
import React,{useState, useRef, useEffect} from "react";
import logo from "../images/freshBalance.png"

export default function Footer(){
    const footerLinks = [
        {name:"Home",link:"/"},
        {name:"About us",link:"/about-us"},
        {name:"Services",link:"/services"},
        {name:"Subscriptions",link:"/subscriptions"},
        {name:"Communities",link:"/communities"},
        {name:"Support",link:"/support"},
        {name:"Login",link:"/login"},
        {name:"Favourites",link:"/favourites"},
        {name:"Cart",link:"/cart"},
    ]
const footerIcons = {
    Home:"fa-solid fa-house",
    Services:"fa-solid fa-location-dot",
    Subscriptions:"fa-solid fa-dollar-sign",
    Communities:"fa-regular fa-comment",
    Support:"fa-solid fa-headset",
    Login:"fa-solid fa-user",
    Favourites:"fa-solid fa-heart",
    Cart:"fa-solid fa-cart-shopping",
}
    return (
    <div className="footer">
        <div className="footerTop">
            <div className="footerNavBox">
                <ul className="footerNav">
                {footerLinks.map((item, itemIndex) => (
                    <li key={itemIndex}>
                        <Link to={item.link}>
                        {footerIcons[item.name] && <i className={footerIcons[item.name]}></i>}
                        {item.name}
                        </Link>
                    </li>
                ))}
                </ul>
            </div>
        </div>
        <div className="footerBottom">
            <p><i className="fa-regular fa-copyright"></i>2025 FreshBalance. All Rights Reserved.</p>
        </div>
    </div>
    )
}