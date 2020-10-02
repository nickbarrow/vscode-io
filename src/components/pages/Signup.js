import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");

  const createUserWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") setEmail(value);
    else if (name === "userPassword") setPassword(value);
    else if (name === "displayName") setDisplayName(value);
  };

  return (
    <div className="container">
      <h1 className="title text-center">Sign Up</h1>
      <div className="border rounded p-4">
        <form className="d-flex flex-column">
          <input
            type="text"
            className="p-1 rounded mb-2 border text-center"
            name="displayName"
            value={displayName}
            placeholder="display name"
            id="displayName"
            onChange={(event) => onChangeHandler(event)}
          />

          <input
            type="email"
            className="p-1 rounded mb-2 border text-center"
            name="userEmail"
            value={email}
            placeholder="email"
            id="userEmail"
            onChange={(event) => onChangeHandler(event)}
          />

          <input
            type="password"
            className="p-1 rounded mb-2 border text-center"
            name="userPassword"
            value={password}
            placeholder="password"
            id="userPassword"
            onChange={(event) => onChangeHandler(event)}
          />
          <button
            className="btn btn-success py-2"
            onClick={(event) => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign Up
          </button>
        </form>
        <p className="text-center my-3">or</p>
        <button className="btn btn-primary w-100">Sign In with Google</button>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:text-blue-600">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
