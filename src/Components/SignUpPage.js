import React from "react";
import axios from "axios";
import {NotificationContainer, NotificationManager} from "react-notifications";
import "react-notifications/lib/notifications.css";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

export default function SignUpPage() {
  var navigate = useNavigate();
  function addData() {
    var fullName = document.getElementById("signup-name").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
    var confirmPassword = document.getElementById(
      "signup-confirm-password"
    ).value;

    if (password === confirmPassword) {
      var payload = {
        fullName: fullName,
        email: email,
        password: password,
      };
      axios
        .post("http://localhost:8080/signup", payload)
        .then(() => {
          NotificationManager.success("Signup Succesful!");
          navigate("/login");
        })
        .catch((e) => {
          console.log(e);
          NotificationManager.error("Something went wrong!");
        });
    } else {
      NotificationManager.error("Passwords don't match!");
    }
  }
  return (
    <div>
      <NotificationContainer />
      <div className="signup-form-container">
        <div className="signup-form-group">
          <label htmlFor="signup-name">Full Name:</label>
          <input
            type="text"
            id="signup-name"
            name="name"
            className="signup-input"
            required
          />
        </div>
        <div className="signup-form-group">
          <label htmlFor="signup-email">Email:</label>
          <input
            type="email"
            id="signup-email"
            name="email"
            className="signup-input"
            required
          />
        </div>
        <div className="signup-form-group">
          <label htmlFor="signup-password">Password:</label>
          <input
            type="password"
            id="signup-password"
            name="password"
            className="signup-input"
            required
          />
        </div>
        <div className="signup-form-group">
          <label htmlFor="signup-confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="signup-confirm-password"
            name="confirm-password"
            className="signup-input"
            required
          />
        </div>
        <div className="signup-form-group">
          <button className="signup-button" onClick={addData}>
            Sign Up
          </button>
          <center>
            <Link to="/Login">Already have an account</Link>
          </center>{" "}
        </div>
      </div>
    </div>
  );
}
