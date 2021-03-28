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
  console.log("hello", id + 1);
  const url = "http://127.0.0.1:8000/articles/";
  useEffect(() => {
    console.log("hello world");
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
        {/* <SideCard
          title="Some random title"
          author="Dr. Shamukh"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of LoremIpsum."
        />
        <SideCard
          title="Some other title"
          author="Dr. Shamukh"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of LoremIpsum."
        /> */}
      </div>
    </section>
  );
}

export default ArticlePage;
