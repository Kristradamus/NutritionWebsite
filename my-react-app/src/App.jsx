import { useState } from 'react';
import Header from './components/Header.jsx';
import Navigation from './components/Navigation.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import React from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/aboutUs.jsx';
import Communities from './pages/communities.jsx';
import FrontPage from "./pages/frontPage.jsx";
import Login from "./pages/login.jsx";
import Profile from "./pages/profile.jsx";
import Services from './pages/services.jsx';
import Subscriptions from './pages/subscriptions.jsx';
import Support from "./pages/support.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Navigation/>
      <ImageSlider/>

      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/front-page" element={<FrontPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/services" element={<Services />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}