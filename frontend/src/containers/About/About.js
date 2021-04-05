import React from "react";
import pic from "../../assets/pictures/MyPic.jpg";
import "./About.css";

function About() {
  return (
    <div>
      <img src={pic} alt="About" className="myImage" />
      <div className="contact_page">
        <h2 className="my_name_contact">Animesh Kumar</h2>
          <h3>About Me</h3>
          <p>I am a 3rd year Computer Science and Engineering undergraduate at Indian Institute of Information 
            Technology, Design and Manufacturing, Kancheepuram(IIITDM Kancheepuram, Chennai). I have 
            learnt algorithms and data structures designing and my interests lies in algorithm analysis.
            I have also worked on multithreaded programming using C language. I have worked on Django, 
            Django-Rest-Framework with database using SQLite3 database. I have created some frontend 
            using the javascript library React.js.
          </p>
        <ul style={{ listStyle: "none" }}>
          <li style={{ marginBottom: "8px" }}>
            Frontend Development using React.js
          </li>
          <li style={{ marginBottom: "8px" }}>
            Backend RESTful API using django framework
          </li>
          <li style={{ marginBottom: "8px" }}>
            Knows how to work on Linux OS
          </li>
          <li style={{ marginBottom: "8px" }}>
            Languages/framework: C, C++, Javascript, Python, ScikitLearn, OpenCV, Pandas, Numpy, Matplotlib
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
