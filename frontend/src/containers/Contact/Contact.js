import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact_page">
      <h2 className="my_name_contact">Animesh Kumar</h2>
      <ul style={{ listStyle: "none" }}>
        <h3>Contact Me</h3>
        <li style={{ marginBottom: "8px" }}>
          <b>Email: </b>24animesh11@gmail.com
        </li>
        <li style={{ marginBottom: "8px" }}>
          <b>Mobile No.: </b>+91 7985851496
        </li>
        <li style={{ marginBottom: "8px" }}>
          <a
            href="https://github.com/Animesh241100"
            target="_blank"
            rel="noreferrer"
          >
            My Github Page
          </a>
        </li>
        <div
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="medium"
          data-theme="dark"
          data-type="HORIZONTAL"
          data-vanity="animesh-kumar-906a6b192"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            href="https://in.linkedin.com/in/animesh-kumar-906a6b192?trk=profile-badge"
          >
            ANIMESH KUMAR
          </a>
        </div>
      </ul>
    </div>
  );
}

export default Contact;
