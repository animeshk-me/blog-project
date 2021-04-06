import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import "./MyArticleEdit.css";
import axiosInstance from "../../axios";
import { useAlert } from "react-alert";

function MyArticleEdit(props) {
  const alert = useAlert();
  const history = useHistory();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const { id } = useParams();
  useEffect(() => {
    axiosInstance
      .get("articles/user/" + id)
      .then((response) => {
        setFormData({
          title: response.data.title,
          content: response.data.content,
        });
      })
      .catch((error) => {
        console.log(error);
        alert.show("Fetching unsuccessful!!");
      });
  }, [id, alert]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .put("articles/user/" + id + "/", {
        title: formData.title,
        content: formData.content,
      })
      .then((response) => {
        alert.show("Article Saved!");
        history.push("/my-articles");
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axiosInstance
      .delete("articles/user/" + id + "/")
      .then((response) => {
        alert.show("Article Deleted Successfully!");
        history.push("/my-articles");
      })
      .catch((error) => console.log(error));
  };
  return (
    <form noValidate>
      <h1 style={{ marginLeft: "5%" }}>Edit Article</h1>
      <div className="div_save_edit">
        <div type="submit" onClick={handleSubmit} className="button_add">
          Save Changes
        </div>
      </div>
      <div className="div_delete">
        <div type="submit" onClick={handleDelete} className="button_delete">
          Delete Article
        </div>
      </div>
      <section className="section_edit">
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
      </section>
    </form>
  );
}

export default MyArticleEdit;
