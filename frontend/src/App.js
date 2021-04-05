import './App.css';


import Home from './containers/Home/Home'
import Contact from './containers/Contact/Contact'
import About from './containers/About/About'
import ArticlePage from './containers/Article/ArticlePage'
import Register from './containers/Authentication/Register'
import Login from './containers/Authentication/Login'
import MyArticles from './containers/MyArticles/MyArticles'
import MyArticleEdit from './containers/MyArticles/MyArticleEdit'
import MyArticleCreate from './containers/MyArticles/MyArticleCreate'

import Navbar from './containers/Navbar/Navbar'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useState, useEffect} from 'react'
import axiosInstance from './axios';
import Footer from './components/Footer/Footer';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    console.log('exec');
    setRefresh(!(refresh));
  }

  console.log("goo app");
  return (
    <Router>
      <div className="App">
        <Navbar handleRefresh={handleRefresh} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/about' exact component={About} />
          <Route path='/articles/:id' exact component={ArticlePage} />
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={() => <Login handleRefresh={handleRefresh} />}/>
          <Route path='/my-articles' exact component={MyArticles} />
          <Route path='/my-articles/new' exact component={MyArticleCreate} />
          <Route path='/my-articles/:id' exact component={MyArticleEdit} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
