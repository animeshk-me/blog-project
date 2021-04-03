import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import Card from '../../components/Card/Card'
import MainCard from '../../components/MainCard/MainCard'
import axiosInstance from '../../axios'
import './MyArticles.css'

function MyArticles() {
    const [Articles, setArticles] = useState([]);
    useEffect(() => {
        axiosInstance.get('articles/user/list/')
            .then((response) => {
                setArticles(response.data);
            });
    }, []);

    
    const articles = Articles
        .map((article) => 
            <div key={article.id}>
                <MainCard article={article} />
                <NavLink to={"my-articles/"+article.id}>
                    <button className="editbtn">Edit</button>
                </NavLink>
            </div>
        );
    
    return (
        <div className='home'>
            <Card> My Article Page </Card>
            {articles}
        </div>
    )
}

export default MyArticles;