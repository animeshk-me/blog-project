import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      Full-Stack Development by Animesh Kumar
      <NavLink to="/contact" style={{ color:"whitesmoke",float: "right", paddingRight: "10px", textDecoration:"none"}}>
        Contact Me
      </NavLink>
    </div>
  );
}
