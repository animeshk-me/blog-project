import React, { useState } from "react";
import { useEffect } from "react";
import MainCard from "../../components/MainCard/MainCard";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [Articles, setArticles] = useState([]);
  useEffect(() => {
    if (searchQuery === "") {
      axios.get("http://127.0.0.1:8000/articles/").then((response) => {
        setArticles(response.data);
      });
    }
  }, [searchQuery]);

  const articles = Articles.map((article) => (
    <NavLink
      key={article.id}
      to={"article-list/" + article.id}
      className="navlink_home"
    >
      <MainCard article={article} />
    </NavLink>
  ));
  const searchChangeHandler = (e) => {
    const typedData = e.target.value;
    setSearchQuery(typedData);
    if (searchQuery !== "") {
      axios
        .get("http://127.0.0.1:8000/articles/search/?search=" + searchQuery)
        .then((res) => setArticles(res.data));
    }
  };
  return (
    <div>
      <form>
        <input
          className="search"
          type="text"
          placeholder="Search topic..."
          onChange={searchChangeHandler}
          value={searchQuery}
        ></input>
      </form>
      {articles}
    </div>
  );
}

export default Home;
