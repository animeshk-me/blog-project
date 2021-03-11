import logo from './logo.svg';
import './App.css';
import Home from './containers/home';
import Contact from './containers/contact';
import Posts from './containers/posts/posts';

import Navbar from './components/navbar';
import Card from './components/UI/card';
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
        <Route path='/posts' exact component={Posts} />
        {/* <Home/> */}
      </div>
    </Router>
  );
}

export default App;
