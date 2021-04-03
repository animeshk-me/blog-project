import React from 'react';
// import { NavLink } from 'react-router-dom'
import './MainCard.css';

function MainCard(props) {
    return (
        <div className="mainCard">
            <div className="title">{props.article.title}</div>
            <div className="author">{props.article.author}</div>
            <div className="timestamp">{props.article.timestamp}</div>
        </div>
    )
}

export default MainCard
