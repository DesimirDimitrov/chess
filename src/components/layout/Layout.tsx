import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./../../App.css";

const Layout = (props: { children: any }) => (
  <div className="mainLayout">
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
