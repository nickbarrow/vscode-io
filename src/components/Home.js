import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { Redirect } from "react-router-dom";

const Camp = () => {
    return <Redirect to="/login" />;
};

export default Camp;
