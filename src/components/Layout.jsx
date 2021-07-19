import React from "react";
import "../assets/styles/components/Layout.scss";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
