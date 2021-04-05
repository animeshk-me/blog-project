import React, { Fragment } from "react";
import { useState } from "react";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { useEffect } from "react";

import axiosInstance from "../../axios";
import "./Navbar.css";

function Navbar(props) {
  const history = useHistory();
  const [loginData, setLoginData] = useState("Not Logged in");
  const loggedInStatus = localStorage.getItem("auth_status");
  console.log("lol wa");
  useEffect(() => {
    if (loggedInStatus === "logged_in") {
      axiosInstance.get("api/current-user/").then((response) => {
        console.log(response.data);
        setLoginData("Hi " + response.data.first_name);
      });
    }
  }, [loggedInStatus]);

  const logoutHandler = () => {
    axiosInstance
      .post("api/logout/", {
        refresh_token: localStorage.getItem("refresh_token"),
      })
      .then((res) => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.setItem("auth_status", "logged_out");
        axiosInstance.defaults.headers["Authorization"] = null;
        setLoginData("Not Logged in");
        props.handleRefresh();
        history.push("/");
        alert("Logged out successfully!!");
      })
      .catch((error) => console.log(error));
  };
  let login_button = "";
  let logout_button = "";
  let register_button = "";
  let my_articles_button = "";
  let new_article_button = "";
  if (loggedInStatus === "logged_in") {
    logout_button = (
      <li>
        <NavLink to="/" onClick={logoutHandler}>
          Logout
        </NavLink>
      </li>
    );
    my_articles_button = (
      <li>
        <NavLink to="/my-articles">My Articles</NavLink>
      </li>
    );
    new_article_button = (
      <li>
        <NavLink to="/my-articles/new">Write</NavLink>
      </li>
    )
  } else {
    login_button = (
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    );
    register_button = (
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    );
  }
  return (
    <Fragment>
      <div className="navbar">
        <ul className="navbarMenu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {login_button}
          {register_button}
          {my_articles_button}
          {new_article_button}
          <li>
            <NavLink to="/contact">Contact us</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          {logout_button}
          <li className="li_login"><div className="div_login">{loginData}</div></li>
          {/* {logged_in_nav} */}
        </ul>
      </div>
    </Fragment>
  );
}

export default Navbar;
