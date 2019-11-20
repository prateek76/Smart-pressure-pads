import React, { Component } from 'react';
import PadDetails from './components/PadDetails';
import Header from './components/Header';
import Mapy from './components/Mapy';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';

class App extends Component {

  render() {
    return (
      <div style={{ fontSize: "26px", color: '#222', textAlign: 'center', margin: 'auto' }}>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/">
              <Mapy />
            </Route>
            <Route path="/pad">
              <PadDetails />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;