import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import axios from "axios";

import SideCard from "../../components/SideCard/SideCard";
import Article from "./Article";
import "./ArticlePage.css";

function ArticlePage(props) {
  const [MainArticle, setMainArticle] = useState({});
  const [SideArticleList, setSideArticleList] = useState([]);
  const { id } = useParams();
  const url = "http://127.0.0.1:8000/articles/";
  useEffect(() => {
    axios
      .get(url + id)
      .then((response) => {
        setMainArticle(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
    axios
      .get(url)
      .then((response) => setSideArticleList(response.data))
      .catch((error) => console.log(error));
  }, [url, id]);
  const SideArticles = SideArticleList.map((article) =>
        <NavLink key={article.id} exact to={"/articles/"+article.id}>
            <SideCard
                title={article.title}
                author={article.author}
                content={article.content}
            />
        </NavLink>
      )
  return (
    <section className="postsBody">
      <Article article={MainArticle} />
      <div className="sideBar">
          {SideArticles}
      </div>
    </section>
  );
}

export default ArticlePage;
