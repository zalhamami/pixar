import './assets/styles/App.css';
// import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import PhotoDetails from './pages/PhotoDetails';

function App() {
  return (
    <Router>
      <div id="app">
        {/* <Navigation /> */}
        <div className="content">
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/photo/:id" exact component={PhotoDetails} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
