import { Suspense } from "react"; 
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AboutUs = React.lazy(() => import("./pages/aboutUs.jsx"));
const Communities = React.lazy(() => import("./pages/communities.jsx"));
const FrontPage = React.lazy(() => import("./pages/frontPage.jsx"));
const Login = React.lazy(() => import("./pages/login.jsx"));
const Profile = React.lazy(() => import("./pages/profile.jsx"));
const Services = React.lazy(() => import("./pages/services.jsx"));
const Subscriptions = React.lazy(() => import("./pages/subscriptions.jsx"));
const Support = React.lazy(() => import("./pages/support.jsx"));
const ProductPage = React.lazy(() => import("./pages/productPage.jsx"));
const Favourites = React.lazy(() => import("./pages/favourites.jsx"));
const Cart = React.lazy(() => import("./pages/cart.jsx"));

import MainLayout from "./components/MainLayout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route element={<MainLayout />}>
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/communities" element={<Communities />} />
              <Route path="/" element={<FrontPage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/support" element={<Support />} />
              <Route path="/product-page/:promotionName" element={<ProductPage />} />
            </Route>
              <Route path="/cart" element={<Cart />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
