import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") setEmail(value);
    else if (name === "userPassword") setPassword(value);
  };

  return (
    <div className="container">
      <h1 className="title my-2 text-center">Login</h1>
      <div className="border rounded p-4">
        <form className="d-flex flex-column">
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
            className="btn btn-success px-5"
            onClick={(event) => {
              signInWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Login
          </button>
        </form>

        <p className="my-3 text-center">or</p>

        <button
          className="btn btn-primary w-100"
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Sign in with Google
        </button>
        <p className="mt-3">
          Don't have an account?{" "}
          <Link to="signup" className="text-blue">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to="reset-password" className="text-blue">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
