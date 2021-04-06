import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useState} from 'react'

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
import Footer from './components/Footer/Footer';
import Navbar from './containers/Navbar/Navbar'



function App() {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!(refresh));
  }

  return (
    <Router>
      <div className="App">
        <Navbar handleRefresh={handleRefresh} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/about' exact component={About} />
          <Route path='/article-list/:id' exact component={ArticlePage} />
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
