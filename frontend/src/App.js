import './App.css';

import Home from './containers/Home/Home'
import Contact from './containers/Contact/Contact'
import ArticleList from './containers/ArticleList/ArticleList'
import ArticlePage from './containers/Article/ArticlePage'

import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  // const Posts=
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Card>Hi </Card>
        <Route path='/' exact component={Home} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/articles/:id' exact component={ArticlePage} />
        <Route path='/articles' exact component={ArticleList} />
        {/* <Home/> */}
      </div>
    </Router>
  );
}

export default App;
