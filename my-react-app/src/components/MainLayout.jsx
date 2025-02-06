import Header from "./Header.jsx";
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
import "./MainLayout.css";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="layout">
      <Header />
      <Navigation />
      <div className="mainLayout">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}