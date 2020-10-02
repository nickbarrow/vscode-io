import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { fireAuth } from '../firebase';

import Header from './display/Header';
import Sidebar from './display/Sidebar';
import WindowTabs from './display/WindowTabs';


import Login from './pages/Login';
import Signup from './pages/Signup';
import Camp from './pages/Camp';
import Inventory from './pages/Inventory';

import "../../styles/Main.scss";

// PrivateRoute redirects to '/login' if user not authenticated.
function PrivateRoute({ component: Component, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => auth !== null ? (<Component {...props} />) 
          : (<Redirect to={{ pathname: '/login' }} />) } />
  );
}

export default class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: fireAuth.user,
      openWindows: ['Camp.js'],
      activeWindow: 'Camp.js'
    }
  }

  componentDidMount = async () => {
    fireAuth.onAuthStateChanged((user) => {
        if (user) {
            this.setState({ user });
        } else this.setState({ user: null });
    });
  };

  // Open/set active window.
  openWindows = (file) => {
    let tempWindows = this.state.openWindows,
        idx = tempWindows.indexOf(file);
    if (idx < 0) tempWindows.push(file);
    this.setState({ openWindows: tempWindows });
    // Activate window.
    this.setActiveWindow(file);
  };

  closeWindow = async (window) => {
    let tempWindows = this.state.openWindows,
        idx = tempWindows.indexOf(window);
    tempWindows.splice(idx, 1);
    await this.setState({ openWindows: tempWindows });
    this.setActiveWindow(this.state.openWindows[0]);
  }

  // Update active window tab.
  setActiveWindow = async (window) => {
    await this.setState({ activeWindow: window });
  }

  render () {
    return (
      <Router>
        <Header />
        <div className="main-window">
          <Sidebar
            user={this.state.user}
            openWindows={this.openWindows}
            setActiveWindow={this.setActiveWindow} />

          <div className="main-window__right">
            <WindowTabs
              openWindows={this.state.openWindows}
              activeWindow={this.state.activeWindow}
              setActiveWindow={this.setActiveWindow} 
              closeWindow={this.closeWindow} />
            <div className="main-window__pane">
              <Switch>
                <PrivateRoute path="/Camp.js" auth={this.state.user} component={Camp} exact />
                <PrivateRoute path="/Inventory.html" auth={this.state.user} component={Inventory} exact />

                <Route
                  path="/"
                  render={() => {
                    if (this.state.user) return <Redirect to="/Camp.js" />;
                    else return <Redirect to="/login" />;
                  }}
                  exact
                />
                <Route
                  path="/login"
                  render={() => {
                    if (this.state.user) return <Redirect to="/Camp.js" />;
                    else return <Login />;
                  }}
                  exact
                />
                <Route path="/signup" component={Signup} exact />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
