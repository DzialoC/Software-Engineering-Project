import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//trying redux
import { useDisatch, useDispatch } from "react-redux";
import { loginUser, loginSucess, loginFailure, loginRequest } from "../../actions/authActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const history = useNavigate();

  //redux
  const dispatch = useDispatch();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      //redux
      dispatch(loginRequest());

      const response = await axios.post(
        "http://localhost:5000/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      ); // Ensure withCredentials is true to send cookies

      if (response.data.message === "Login successful") {
        //redux
        dispatch(loginSucess());

        history("/dashboard");

      } else {
        // Handle cases where there might be a response but no access token
        //redux
        dispatch(loginFailure());

        setMsg("Login failed. Please try again.");
      }
    } catch (error) {
      //redux
      dispatch(loginFailure());
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form onSubmit={Auth} className="box">
                <p className="has-text-centered">{msg}</p>
                <div className="field mt-5">
                  <label className="label">Email </label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Password</label>
                  <div className="controls">
                    <input
                      type="password"
                      className="input"
                      placeholder="******"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button className="button is-success is-fullwidth">
                    Login
                  </button>
                </div>
              </form>
              <div className="field mt-5">
                <button
                  className="button is-success is-fullwidth"
                  onClick={() => history("/register")}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
