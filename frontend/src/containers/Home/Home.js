import React, { useState } from 'react'
import { useEffect } from 'react'
import Card from '../../components/Card/Card'
import MainCard from '../../components/MainCard/MainCard'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

// import axiosInstance from '../../axios'

function Home() {
    const [Articles, setArticles] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/articles/')
            .then((response) => {
                setArticles(response.data);
            });
    }, []);

    
    const articles = Articles
        .map((article) => 
            <NavLink key={article.id} to={"articles/"+article.id}>
                <MainCard article={article}/>
            </NavLink>
        );
    
    return (
        <div className='home'>
            <Card> Home page </Card>
            {/* {auth_data} */}
            {articles}
        </div>
    )
}

export default Home 
