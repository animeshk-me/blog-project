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
                <NavLink to={"my-articles/"+article.id} className="my_articles_link">
                    <MainCard article={article} />
                </NavLink>
            </div>
        );
    
    return (
        <div className='my_articles_home'>
            <h1 style={{marginLeft:"40%"}}>My Articles</h1>
            <NavLink to="my-articles/new" className="link_add">
                <div className="div_add">
                  Add New Article
                </div>
            </NavLink>
            {articles}
        </div>
    )
}

export default MyArticles;