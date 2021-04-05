import React, { useState } from "react";
import { useEffect } from "react";
import { Redirect, useParams, useHistory } from "react-router-dom";

import "./MyArticleEdit.css";
import axiosInstance from "../../axios";

function MyArticleEdit(props) {
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
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //   const redirect = () => {
  //       history.push('/my-articles');
  //     }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance
      .put("articles/user/" + id + "/", {
        title: formData.title,
        content: formData.content,
      })
      .then((response) => {
        //   return <Redirect to="/my-articles" />
        history.push("/my-articles");
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axiosInstance
      .delete("articles/user/" + id + "/")
      .then((response) => {
        alert("Article Deleted Successfully!");
        history.push("/my-articles");
      })
      .catch((error) => console.log(error));
  }
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

export default MyArticleEdit;
