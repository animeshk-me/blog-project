import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import axios from "axios";

import SideCard from "../../components/SideCard/SideCard";
import Article from "./Article";
import "./ArticlePage.css";

function ArticlePage(props) {
  const [isLoading, setIsloading] = useState(true);
  const [MainArticle, setMainArticle] = useState({});
  const [SideArticleList, setSideArticleList] = useState([]);
  const { id } = useParams();
  // const url = "http://127.0.0.1:8000/articles/"; // for local development server
  // const url = "http://13.233.125.44:8000/articles/";  // for aws EC2 server (deployment)
  const url = "http://13.233.125.44/articles/";  // for Apache2
  useEffect(() => {
    axios
      .get(url + id)
      .then((response) => {
        setMainArticle(response.data);
        setIsloading(false);
      })
      .catch((error) => console.log(error));
    axios
      .get(url)
      .then((response) => {
        setSideArticleList(response.data.filter(item => item.id != id).slice(0, 5));
      })
      .catch((error) => console.log(error));
  }, [url, id]);
  const SideArticles = SideArticleList.map((article) =>
        <NavLink key={article.id} exact to={"/article-list/"+article.id} className="navlink_sidecard">
            <SideCard
                title={article.title}
                author={article.author}
                content={article.content}
            />
        </NavLink>
      )
  return (
    <section className="postsBody">
      <Article article={MainArticle} is_loading={isLoading} />
      <div className="sideBar">
          {SideArticles}
      </div>
    </section>
  );
}

export default ArticlePage;
