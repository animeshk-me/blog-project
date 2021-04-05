import React from 'react';
import './SideCard.css';

function SideCard(props) {
    return (
        <div className="sideCard">
            <div className="title_sideCard">{props.title}</div>
            <div className="author_sideCard">{props.author}</div>
            <div className="content_sideCard">{props.content.substr(0, 150)+"..."}</div>
        </div>
    )
}

export default SideCard
