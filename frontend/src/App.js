import './App.css';


import Home from './containers/Home/Home'
import Contact from './containers/Contact/Contact'
// import ArticleList from './containers/ArticleList/ArticleList'
import ArticlePage from './containers/Article/ArticlePage'
import Register from './containers/Authentication/Register'
import Login from './containers/Authentication/Login'
import MyArticles from './containers/MyArticles/MyArticles'
import MyArticleEdit from './containers/MyArticles/MyArticleEdit'

import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useState, useEffect} from 'react'
import axiosInstance from './axios';

function App() {
  const [refresh, setRefresh] = useState(false);
  const [loginData, setLoginData] = useState('XD');
  const loggedInStatus = localStorage.getItem('auth_status');
    console.log("lol wa");
    useEffect(() => {
        if(loggedInStatus === 'logged_in') {
            axiosInstance.get('api/current-user/')
            .then((response) => {
                console.log(response.data);
                setLoginData("Hi "+response.data.first_name)
            })
        }
    }, [loggedInStatus]);

  const handleRefresh = (value) => {
    setRefresh(value)
  }
  console.log("goo app");
  return (
    <Router>
      <div className="App">
        <Navbar data={loginData} status={loggedInStatus} handleRefresh={handleRefresh} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/articles/:id' exact component={ArticlePage} />
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={() => <Login handleRefresh={handleRefresh} />}/>
          <Route path='/my-articles' exact component={MyArticles} />
          <Route path='/my-articles/:id' exact component={MyArticleEdit} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
