import React from "react";
import "./index.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogOut = () => {
    logout();
  };
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid justify-content-between">
        <div className="d-flex">
          <a
            className="navbar-brand me-2 mb-1 d-flex align-items-center"
            href="/"
          >
            <img
              src={logo}
              height="50"
              alt="ufood Logo"
              loading="lazy"
              //style="margin-top: 2px"
            />
          </a>
        </div>
        <div className="form-outline" id="search-form">
          <input type="search" id="form1" className="form-control" />
          <button type="button" class="btn btn-primary" id="search-btn">
            <i class="fas fa-search"></i>
          </button>
        </div>
        {user && (
          <div className="user-options">
            <i className="fas fa-user"></i>
            <span>{user.email}</span>
            <div className="dropdown">
              <i className="fas fa-chevron-down"></i>
            </div>
            <button className="btn btn-primary" onClick={handleLogOut}>
              Log Out
            </button>
          </div>
        )}
        {!user && (
          <div>
            <a href="/signup">
              <button class="btn btn-primary">Sign Up</button>
            </a>
            <a href="/login">
              <button class="btn btn-secondary">Login</button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
