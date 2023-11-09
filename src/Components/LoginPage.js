import React, {useState} from "react";
import axios from "axios";
import {NotificationContainer, NotificationManager} from "react-notifications";
import "react-notifications/lib/notifications.css";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

export default function LoginPage() {
  var navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    const payload = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:8080/signin", payload)
      .then((response) => {
        //  if login was successful based on backend response
        NotificationManager.success("Login Successful!");
        console.log(response);
        localStorage.setItem("login-status", true);
        localStorage.setItem("userId", response.data._id);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        NotificationManager.error("Something went wrong!");
      });
  }

  return (
    <div>
      <NotificationContainer />
      <div className="login-form-container">
        <div className="login-form-group">
          <label htmlFor="login-email">Email:</label>
          <input
            type="email"
            id="login-email"
            name="email"
            className="login-input"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="login-password">Password:</label>
          <input
            type="password"
            id="login-password"
            name="password"
            className="login-input"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login-form-group">
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
        <center>
          <Link to="/SignUp">Don't have an account? Sign Up</Link>
        </center>{" "}
      </div>
    </div>
  );
}
