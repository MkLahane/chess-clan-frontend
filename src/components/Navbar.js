import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { ReactComponent as LoginIcon } from "../icons/login.svg";
import { ReactComponent as SignUpIcon } from "../icons/sign-up.svg";
import { ReactComponent as HomeIcon } from "../icons/home.svg";
import { getAuthToken, setAuthToken } from "../contexts/AuthToken";
import { logoutQuery } from "../Queries/graphql";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthRoute from "./AuthRoute";

export default function Navbar() {
  const entirePathName = window.location.pathname;
  const path = entirePathName === "/" ? "home" : entirePathName.substring(1);
  const [activeNav, setActiveNav] = useState(path);
  const [hoverNav, setHoverNav] = useState("");
  const userLoggedIn = getAuthToken() === "" ? false : true;

  const [logout] = useMutation(logoutQuery);
  return (
    <BrowserRouter>
      <ul className="navbar">
        <li
          onMouseEnter={() => setHoverNav("home")}
          onMouseLeave={() => setHoverNav("")}
          onClick={() => setActiveNav("home")}
          className={
            activeNav === "home" || hoverNav === "home" ? "active-nav" : ""
          }
        >
          <Link to="/">
            <HomeIcon />
            Home
          </Link>
        </li>
        {!userLoggedIn && (
          <li
            onMouseEnter={() => setHoverNav("login")}
            onMouseLeave={() => setHoverNav("")}
            onClick={() => setActiveNav("login")}
            className={
              activeNav === "login" || hoverNav === "login" ? "active-nav" : ""
            }
          >
            <Link to="/login">
              <LoginIcon />
              Login
            </Link>
          </li>
        )}
        {!userLoggedIn && (
          <li
            onMouseEnter={() => setHoverNav("register")}
            onMouseLeave={() => setHoverNav("")}
            onClick={() => setActiveNav("register")}
            className={
              activeNav === "register" || hoverNav === "register"
                ? "active-nav"
                : ""
            }
          >
            <Link to="/register">
              <SignUpIcon />
              Register
            </Link>
          </li>
        )}
        {userLoggedIn && (
          <li
            onMouseEnter={() => setHoverNav("logout")}
            onMouseLeave={() => setHoverNav("")}
            onClick={async () => {
              await logout();
              setAuthToken("");
            }}
            className={
              activeNav === "logout" || hoverNav === "logout"
                ? "active-nav"
                : ""
            }
          >
            <Link to="/">
              <LoginIcon style={{ transform: "scaleX(-1)" }} />
              Logout
            </Link>
          </li>
        )}
      </ul>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
