import React, { useState } from "react";
import axiosInstance from "../../axios";
import { useHistory, NavLink } from "react-router-dom";
import "./Register.css";
import { useAlert } from "react-alert";

export default function Register() {
  const alert = useAlert();
  const history = useHistory();
  const initialFormData = Object.freeze({
    username: "",
    password1: "",
    password2: "",
    firstname: "",
    lastname: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.firstname === "" || formData.lastname === "") {
      alert.show("Invalid Entry!! Try again");
      return;
    }
    if (formData.password1 !== formData.password2) {
      alert.show("Passwords don't match!! Try again");
      return;
    }
    axiosInstance
      .post("api/register-user/", {
        username: formData.username,
        first_name: formData.firstname,
        last_name: formData.lastname,
        password: formData.password1,
      })
      .then((res) => {
        alert.show("Registered Successfully! Redirecting to login page.")
        history.push("/login");
      })
      .catch((error)=>{
        console.log(error);
        alert.show("Invalid Entry! Please try again.")
      });
  };
  return (
    <form noValidate>
      <div className="container">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr></hr>

        <label htmlFor="username">
          <b>Username</b>
        </label>
        <hr></hr>
        <input
          value={formData.username}
          type="text"
          className="register_form"
          placeholder="Enter Username"
          name="username"
          onChange={handleChange}
          id="username"
          required
        />
        <hr></hr>
        <label htmlFor="firstname">
          <b>First Name</b>
        </label>
        <hr></hr>
        <input
          value={formData.firstname}
          type="text"
          placeholder="Enter First Name"
          className="register_form"
          name="firstname"
          onChange={handleChange}
          id="firstname"
          required
        />
        <hr></hr>
        <label htmlFor="lastname">
          <b>Last Name</b>
        </label>
        <hr></hr>
        <input
          value={formData.lastname}
          type="text"
          className="register_form"
          placeholder="Enter Last Name"
          name="lastname"
          onChange={handleChange}
          id="lastname"
          required
        />
        <hr></hr>
        <label htmlFor="password1">
          <b>Password</b>
        </label>
        <hr></hr>
        <input
          value={formData.password1}
          type="password"
          className="register_form"
          placeholder="Enter Password"
          name="password1"
          onChange={handleChange}
          id="password1"
          required
        />
        <hr></hr>
        <label htmlFor="password2">
          <b>Confirm Password</b>
        </label>
        <hr></hr>
        <input
          value={formData.password2}
          type="password"
          placeholder="Confirm Password"
          name="password2"
          className="register_form"
          onChange={handleChange}
          id="password2"
          required
        />
        <hr></hr>
        <button type="submit" onClick={handleSubmit} className="registerbtn">
          Register
        </button>
        <div className="container signin">
          <p>
            Already have an account?{" "}
            <NavLink exact to="/login">
              Login here{" "}
            </NavLink>
          </p>
        </div>
      </div>
    </form>
  );
}
