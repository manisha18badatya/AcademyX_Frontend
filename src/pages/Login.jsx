import "../Stylesheets/Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { Link, NavLink } from "react-router-dom";
function Login() {
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");
  let [validate, setValidate] = useState("");

  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setValidate("Please enter email and password");
    } else {
      const url = "http://localhost:8080/api/v1/users/login";
      const response = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      if (jsonResponse.success === true) {
        localStorage.setItem("isLoggedIn", true);
        setIsLoggedIn(true);
        navigate("/");
      } else {
        setValidate("password is incorrect");
      }
      // localStorage.setItem("isLoggedIn", "true");
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
                alt=""
              />
            </NavLink>
          </div>
          <div className="layout">
            <div className="content">
              <h2 style={{ fontSize: "30px" }}>AcademyX</h2>
              <h1 style={{ fontSize: "80px", marginTop: "80px" }}>WELCOME</h1>
              <h1 style={{ fontSize: "70px" }}>Back!</h1>
              <p style={{ fontSize: "20px", marginTop: "40px" }}>
                Experience the X-Factor in learning <br />
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
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                placeholder="youremail@gmail.com"
                required={true}
              />
              <br />
              <input
                type="text"
                id="inputbox"
                value={password}
                required={true}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                placeholder="password"
              />
              <div className="rmiddle">
                <span>
                  <input type="checkbox" id="checkbox" /> Keep me logged in{" "}
                </span>
                <a href="\">Forgot Password?</a>
              </div>
            </div>

            <div className="linkpage">
              <button onClick={handleLogin}>Sign in</button>

              <p>{validate}</p>
              <span>
                <a href="/">don't have an account?|</a>
                <a href="/">Create an Account</a>
              </span>
            </div>

            <div className="rlast">
              <p>or,login using</p>
              <span>
                <Link to="/">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </Link>
                <Link to="/">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </Link>
                <Link to="/">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
