import React, { Component }from 'react';
import { fireAuth } from '../../firebase';
import "../../../styles/Page.scss";

export default class Inventory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: fireAuth.user,
      
    }
  }

  // Update user on state change.
  componentDidMount = async () => {
    fireAuth.onAuthStateChanged((user) => {
        if (user) {
            this.setState({ user });
        } else this.setState({ user: null });
    });
  };

  render () {
    return (
      <div className="vs-page">
        <p className="page-body">
          <span className="vs-purple">
            import
            <span className="vs-red">Inventory</span>
            from
            <span className="vs-green">'vscode-io/inventory'</span>
            ;
          </span>

        </p>
      </div>
    )
  }
}