import { Navbar } from './containers/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './containers/Pages/Home/Home'
import About from './containers/Pages/About/About'
import { Books } from './containers/Pages/Books/Books'

import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Switch>
          <Route path="/books" exact component={Books} />
        </Switch>
        <Switch>
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
