import React, { useContext } from 'react';
import Login from './Login';
import Signup from './Signup';
import Player from './Player';
import Camp from './Camp';
import Home from './Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { UserContext } from '../providers/UserProvider';
import Header from './display/Header';
import Sidebar from './display/Sidebar';

function PrivateRoute({ component: Component, auth, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) =>
                auth ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login'
                        }}
                    />
                )
            }
        />
    );
}

export default function Routes() {
    const user = useContext(UserContext);
    // console.log("ROUTER: ", user);

    return (
        <Router>
            <Header />
            <Sidebar user={user} />
            
            <div className="main-window">
                {/* <Sidebar /> */}
                <div className="main-window__pane">
                    <Switch>
                        <PrivateRoute
                            path="/camp"
                            auth={user}
                            component={Camp}
                            exact
                        />

                        <Route
                            path="/"
                            render={() => {
                                if (user !== null)
                                    return <Redirect to="/camp" />;
                                else return <Redirect to="/login" />;
                            }}
                            exact
                        />
                        <Route
                            path="/login"
                            render={() => {
                                if (user) return <Redirect to="/camp" />;
                                else return <Login />;
                            }}
                            exact
                        />
                        <Route path="/signup" component={Signup} exact />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
