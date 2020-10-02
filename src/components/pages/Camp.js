import React, { Component } from "react";
import { fireAuth } from "../../firebase";

export default class Camp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: fireAuth.user,
      photoURL: '',
      displayName: '',
      email: ''
    }
  }
  
  componentDidMount = async () => {
    fireAuth.onAuthStateChanged((user) => {
        if (user) {
            this.setState({
              user,
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL
            });
        } else this.setState({ user: null });
    });
  };

  render () {

    return (
      <>
        <div className="flex flex-column px-3 py-4">
          <img src={this.state.photoURL} style={{ width: "100px" }} alt="User" />

          <div>
            <h2>{this.state.displayName}</h2>
            <h3>{this.state.email}</h3>
            <button
              className="btn btn-danger"
              onClick={() => { fireAuth.signOut(); }}>
              Sign out
            </button>
          </div>
        </div>
      </>
    );
  }
};