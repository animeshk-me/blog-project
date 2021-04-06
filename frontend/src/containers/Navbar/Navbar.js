import React, { Fragment } from "react";
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useEffect } from "react";
import logo_name from "./../../assets/pictures/brand_name.png"
import logo_pic from "./../../assets/pictures/brand_pic.png"
import axiosInstance from "../../axios";
import "./Navbar.css";
import { useAlert } from "react-alert";

function Navbar(props) {
  const alert = useAlert();
  const history = useHistory();
  const [loginData, setLoginData] = useState("Not Logged in");
  const loggedInStatus = localStorage.getItem("auth_status");
  useEffect(() => {
    if (loggedInStatus === "logged_in") {
      axiosInstance.get("api/current-user/").then((response) => {
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
        alert.show("Logged out successfully!!");
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
        <NavLink to="/my-articles">Your Articles</NavLink>
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
            <img src={logo_pic} alt="logo_pic" className="nav_img_pic"/>
          </li>
          <li>
            <img src={logo_name} alt="logo_name" className="nav_img_name"/>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {login_button}
          {register_button}
          {my_articles_button}
          {new_article_button}
          <li>
            <NavLink to="/contact">Contact me</NavLink>
          </li>
          <li>
            <NavLink to="/about">About me</NavLink>
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
