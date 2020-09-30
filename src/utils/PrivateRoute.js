import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  var user = useContext(UserContext);
  if (!user) alert("No user");
  console.log(user);

  return (
    <Route
      {...rest}
      render={() => (user ? children : <Redirect to="/login" />)}
    />
  );
}

export default PrivateRoute;
