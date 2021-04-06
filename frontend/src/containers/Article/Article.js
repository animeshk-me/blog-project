import React from "react";
import "./Article.css";

function Article(props) {
  const contentWithNewLine = String(props.article.content)
    .split("\n")
    .map((str, index) => <p key={index}>{str}</p>);

  // const contentWithIndexValues = String(props.article.content)
  //   .split("\n")
  //   .map((str, index) => {id:index, data:str});

  // const contentWithNewLine = contentWithIndexValues.map((str)=><p key={str.id} >{str}</p>)
  const date = String(props.article.timestamp).substring(0, 10).split("-");

  return (
    <div className="articleBody">
      <h1>{props.article.title}</h1>
      <span>
        <b style={{fontSize:"19px"}}> {props.article.author}</b>   wrote on {date[2]+'/'+date[1]+'/'+date[0]}{" "}
      </span>
      {contentWithNewLine}
      {/* <img
        src={require("../../assets/icons/likeicon.png").default}
        alt="like img not found"
        style={{ marginLeft: "40%", marginTop: "5%" }}
        onClick={likeHandler}
      />
      <img
        src={require("../../assets/icons/dislikeicon.webp").default}
        alt="dislike img not found"
        style={{ marginLeft: "10%", marginTop: "5%" }}
        onClick={dislikeHandler}
      /> */}
    </div>
  );
}

export default Article;
