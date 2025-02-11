import { useState } from 'react'
import "./services.css"

export default function Services() {
    const services = [
      {
        title: "Personalized Meal Plans",
        description: "Tailored meal plans designed to meet your unique nutritional needs and goals.",
        icon: "fa-solid fa-utensils",
      },
      {
        title: "Nutrition Consultations",
        description: "One-on-one sessions with certified nutritionists to guide you on your health journey.",
        icon: "fa-solid fa-user-nurse",
      },
      {
        title: "Workshops & Seminars",
        description: "Join our workshops to learn about healthy eating, meal prep, and more.",
        icon: "fa-solid fa-chalkboard-user",
      },
    ];
  
    const locations = [
      {
        name: "Downtown Store",
        address: "123 Main St, City, Country",
        phone: "+123 456 7890",
        hours: "Mon-Fri: 9 AM - 6 PM",
        mapUrl: "https://www.google.com/maps/embed?pb=...", // Replace with your Google Maps embed URL
      },
      {
        name: "Uptown Store",
        address: "456 Elm St, City, Country",
        phone: "+123 456 7891",
        hours: "Mon-Fri: 10 AM - 7 PM",
        mapUrl: "https://www.google.com/maps/embed?pb=...", // Replace with your Google Maps embed URL
      },
    ];
  
    return (
      <div className="services">
        {/* Header Section */}
        <div className="servicesHeader">
          <h1>Our Services</h1>
          <p>Discover how we can help you achieve your health and wellness goals.</p>
        </div>
  
        {/* Services Offered */}
        <div className="servicesList">
          {services.map((service, index) => (
            <div className="serviceCard" key={index}>
              <i className={service.icon}></i>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
  
        {/* Locations Section */}
        <div className="locations">
          <h2>Our Locations</h2>
          <p>Visit us at one of our convenient locations or contact us for more information.</p>
          <div className="locationsList">
            {locations.map((location, index) => (
              <div className="locationCard" key={index}>
                <h3>{location.name}</h3>
                <p>{location.address}</p>
                <p>{location.phone}</p>
                <p>{location.hours}</p>
                <iframe
                  title={location.name}
                  src={location.mapUrl}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
  
        {/* Call to Action */}
        <div className="cta">
          <h2>Ready to Transform Your Health?</h2>
          <p>Book a consultation today or visit us at one of our locations.</p>
          <button>Book Now</button>
        </div>
      </div>
    );
  }