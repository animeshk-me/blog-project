import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import logo_name from "../../assets/pictures/brand_name.png";

export default function Footer() {
  return (
    <div className="footer">
      <img src={logo_name} alt="logo_name" className="footer_name" />
       {" "}      
      <NavLink
        to="/contact"
        className="footer_link"
      >
        Full-Stack Web application Development by Animesh Kumar
      </NavLink>
    </div>
  );
}
