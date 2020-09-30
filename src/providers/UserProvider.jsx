import React, { Component, createContext } from "react";
import { fireAuth, generateUserDocument } from "../firebase";

export const UserContext = createContext({ user: null });

export default class UserProvider extends Component {
    state = {
        user: null
    };

    componentDidMount = async () => {
        fireAuth.onAuthStateChanged((fbUser) => {
            if (fbUser) {
                this.setState({ user: fbUser });
            } else this.setState({ user: null });
        });
    };

    render() {
        const { user } = this.state;

        return (
            <UserContext.Provider value={user}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
