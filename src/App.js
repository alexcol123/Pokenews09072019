import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App ">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
