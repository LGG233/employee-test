import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './components/navbar';
import Landing from './components/landing';

class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <NavBar />
        <br />
        <div className="container-fluid MainPage">
          <div className="row">
            <div className="col-md-12">
              <Switch>
                <Route exact path="/" component={Landing} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
