import "../Stylesheets/Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { NavLink } from "react-router-dom";

// Set axios default configuration
axios.defaults.withCredentials = true;

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [validate, setValidate] = useState("");

  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setValidate("Please enter email and password");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/users/login",
          {
            email: email,
            password: password,
          }
        );

        if (response.data.success) {
          // Save user data and authentication flag to localStorage
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("user", JSON.stringify(response.data.user)); // Save user data

          setIsLoggedIn(true);
          navigate("/");
        } else {
          setValidate("Password is incorrect");
        }
      } catch (error) {
        console.error(error);
        setValidate("An error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="main">
        <div className="left-login">
          <div className="left_logo">
            <NavLink to="/">
              <img
                src="/public/Image/background_removed_image_ryQNP8BvSu6YbNDZBfKXiA.png"
                alt="Logo"
              />
            </NavLink>
          </div>
          <div className="layout">
            <div className="content">
              <h2 style={{ fontSize: "30px" }}>AcademyX</h2>
              <h1 style={{ fontSize: "80px", marginTop: "80px" }}>WELCOME</h1>
              <h1 style={{ fontSize: "70px" }}>Back!</h1>
              <p style={{ fontSize: "20px", marginTop: "40px" }}>
                Experience the X-Factor in learning
                <br />
              </p>
              <p style={{ fontSize: "40px", marginTop: "40px" }}>
                Continue Your Learnings
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <form>
            <div className="formpage">
              <h3>SIGN IN</h3>
              <input
                type="email"
                id="inputbox"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="youremail@gmail.com"
                required
              />
              <br />
              <input
                type="password"
                id="inputbox"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                required
              />
              <div className="rmiddle">
                <span>
                  <input type="checkbox" id="checkbox" /> Keep me logged in
                </span>
                <a href="#">Forgot Password?</a>
              </div>
            </div>

            <div className="linkpage">
              <button type="submit" onClick={handleLogin}>
                Sign in
              </button>

              {validate && <p>{validate}</p>}
              <span>
                <a href="/">Don't have an account? |</a>
                <a href="/">Create an Account</a>
              </span>
            </div>

            <div className="rlast">
              <p>Or, login using</p>
              <span>Google, GitHub, LinkedIn</span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
