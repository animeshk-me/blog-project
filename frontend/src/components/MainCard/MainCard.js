import React from 'react';
import './MainCard.css';

function MainCard(props) {
    const date = props.article.timestamp.substring(0, 10).split('-');
    return (
        <div className="mainCard">
            <div className="title_mainCard">{props.article.title}</div>
            <div className="author_mainCard">{props.article.author}</div>
            <div className="timestamp_mainCard">{date[2]+'/'+date[1]+'/'+date[0]}</div>
            <div className="content_mainCard">{props.article.content.substr(0, 200)+"..."}</div>
        </div>
    )
}

export default MainCard
