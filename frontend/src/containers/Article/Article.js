import React from 'react'
import './Article.css'


function Article(props) {
    const likeHandler = () => {
        alert("liked")
    }

    const dislikeHandler = () => {
        alert("disliked")
    }

    const contentWithNewLine = String(props.article.content).split('\n')
                        .map((str) => <p>{str}</p>)
    
    return (
        <div className="articleBody">
            <h1>{props.article.title}</h1>
            <span>by {props.article.author} on {props.article.timestamp} </span>
            {contentWithNewLine}
            <img 
                src={require('../../assets/icons/likeicon.png').default} 
                alt="like img not found"
                style={{marginLeft:"40%", marginTop:"5%"}} 
                onClick={likeHandler}
            />
            <img 
                src={require('../../assets/icons/dislikeicon.webp').default} 
                alt="dislike img not found" 
                style={{marginLeft:"10%", marginTop:"5%"}} 
                onClick={dislikeHandler}
            />
        </div>
    )
}

export default Article
