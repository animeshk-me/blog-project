import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./MyArticleCreate.css";
import axiosInstance from "../../axios";
import { useAlert } from "react-alert";

function MyArticleCreate(props) {
  const alert = useAlert();
  const history = useHistory();
  const initialFormData = Object.freeze({
    title: "",
    content: "",
  });
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post("articles/user/list/", {
        title: formData.title,
        content: formData.content,
      })
      .then((response) => {
        alert.show("Article Created Successfully!!");
        history.push("/my-articles");
      })
      .catch((error) => {
        console.log(error)
        alert.show("Article Could not be Created!!");
      });
  };

  return (
    <form noValidate>
      <h1 style={{ marginLeft: "5%" }}>New Article</h1>
      <div className="div_save">
        <div type="submit" onClick={handleSubmit} className="button_add">
          Save
        </div>
      </div>
      <label htmlFor="title">
        <b style={{ marginLeft: "5%" }}>Title</b>
      </label>
      <br />
      <textarea
        value={formData.title}
        type="text"
        name="title"
        cols="100"
        rows="1"
        onChange={handleChange}
        id="title"
        required
      />
      <br />
      <label htmlFor="content">
        <b style={{ marginLeft: "5%" }}>Content</b>
      </label>
      <br />
      <textarea
        value={formData.content}
        type="text"
        name="content"
        cols="100"
        rows="30"
        onChange={handleChange}
        id="content"
        required
      />
      <br />
    </form>
  );
}

export default MyArticleCreate;
