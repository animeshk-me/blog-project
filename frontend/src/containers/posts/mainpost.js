import React from 'react'
import './mainpost.css'


function MainPost(props) {
    const likeHandler = () => {
        alert("liked")
    }

    const dislikeHandler = () => {
        alert("disliked")
    }
    
    return (
        <div className="articleBody">
            <h1>{props.title}</h1>
            <span>by {props.author} on {props.timestamp} </span>
            <p>{props.content}</p>
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

export default MainPost
