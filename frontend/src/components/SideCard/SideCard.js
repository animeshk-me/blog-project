import React from 'react';
import './SideCard.css';

function SideCard(props) {
    return (
        <div className="sideCard">
            <div className="title">{props.title}</div>
            <div className="author">{props.author}</div>
            <div className="content">{props.content.substr(0, 150)+"..."}</div>
        </div>
    )
}

export default SideCard
