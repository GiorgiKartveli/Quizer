// import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import classes from "./MainNavigationBar.module.css";
import { auth } from "../../firebase";
import { useState } from "react";

import LoginImg from "../login/LoginImg";
import QuizerLogo from "../QuizerLogo/QuizerLogo";

import { signOut } from "firebase/auth";

const MainNavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("AlexanderTheGreat");

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setIsLoggedIn(!!user);
  //   });
  //   return () => unsubscribe();
  // }, []);

  const logoutHandler = (e) => {
    try {
      e.preventDefault();
      signOut(auth);
      localStorage.removeItem("AlexanderTheGreat");
      // setIsLoggedIn(false);
      navigate("/login");
      console.log("user logged out");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <NavLink to="/" className={classes.QuizerLogo}>
            <QuizerLogo />
          </NavLink>

          <button className={classes.hamburger} onClick={toggleMenu}>
            {menuOpen ? "X" : "≡"}
          </button>

          <ul className={`${classes.ul} ${menuOpen ? classes.open : ""}`}>
            <li className={classes.li}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li className={classes.li}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                About
              </NavLink>
            </li>
            <li className={classes.li}>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Contact
              </NavLink>
            </li>
            {/* <li className={classes.li}>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Login
              </NavLink>
              <NavLink to="/login">
                <LoginImg />
              </NavLink>
            </li> */}

            {!isLoggedIn ? (
              <li className={classes.li}>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  Login
                </NavLink>
                <NavLink to="/login">
                  <LoginImg />
                </NavLink>
              </li>
            ) : (
              <li className={classes.li}>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  onClick={logoutHandler}
                >
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainNavigationBar;
