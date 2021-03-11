import React from 'react';
import './maincard.css';


function MainCard(props) {
    return (
        <div className="sideCard">
            <div className="title">{props.title}</div>
            <div className="author">{props.author}</div>
        </div>
    )
}

export default MainCard
