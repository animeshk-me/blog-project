import React, { useState } from "react";
import { useEffect } from "react";
import MainCard from "../../components/MainCard/MainCard";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [Articles, setArticles] = useState([]);
  // const url = "http://127.0.0.1:8000/articles/"; // for local development server
  const url = "http://13.233.125.44:8000/articles/";  // for aws EC2 server (deployment)

  useEffect(() => {
    if (searchQuery === "") {
      axios.get(url).then((response) => {
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
        .get(url+ "search/?search=" + searchQuery)
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
