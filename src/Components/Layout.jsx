import React from "react";
import "../assets/css/index.css";
import logo from "../assets/img/favicon.png";

const Layout = ({ children, isDarkMode, handleThemeChange }) => {
  return (
    <div className="main-wrapper">
      <div className="header py-3 pl-2">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center">
            <div className="logo">
              <img src={logo} alt="logo" className="logo" />
              <span>Redefine Status</span>
            </div>
          </div>
        </div>
      </div>
      <div className="content-wrapper">{children}</div>
      <div className="footer py-4">
        <div className="container">
          <div class="d-sm-flex px-md-3">
            <div class="copy_right mr-auto">
              <p class="text-bl mb-0">&copy; 2020 Redefine Status</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
