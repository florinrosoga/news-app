import React, {useEffect} from "react";
import axios from "axios";
import {NotificationContainer, NotificationManager} from "react-notifications";
import "react-notifications/lib/notifications.css";
import {useNavigate} from "react-router-dom";

export default function EditUser() {
  var id = localStorage.getItem("userId");
  var navigate = useNavigate();
  useEffect(() => {
    async function getData() {
      var response = await fetch("http://localhost:8080/user/" + id);
      var data = await response.json();
      console.log(data);
      document.getElementById("signup-name").value = data.fullName;
      document.getElementById("signup-email").value = data.email;
      document.getElementById("signup-password").value = data.password;
    }
    getData();
  }, [id]);

  function editData() {
    var fullName = document.getElementById("signup-name").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;

    var payload = {
      fullName,
      email,
      password,
    };
    axios
      .put("http://localhost:8080/userInfo/" + id, payload)
      .then(() => {
        NotificationManager.success("Data updated successfully!");
      })
      .catch((e) => {
        NotificationManager.error("Something went wrong!");
        console.log(e);
      });
  }

  function deleteUser() {
    if (
      window.confirm(
        "Are you sure you want to delete your account permanently?"
      )
    ) {
      axios
        .delete("http://localhost:8080/user/" + id)
        .then(() => {
          NotificationManager.success("Account deleted successfully!");
          localStorage.removeItem("login-status");
          navigate("/signup", {state: {token: "deleted"}});
        })
        .catch((e) => {
          NotificationManager.error("Something went wrong!");
          console.log(e);
        });
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
            type="type"
            id="signup-password"
            name="password"
            className="signup-input"
            required
          />
        </div>
        <div className="signup-form-group">
          <button className="signup-button" onClick={editData}>
            Edit Info
          </button>
          <button
            className="signup-button"
            style={{backgroundColor: "crimson"}}
            onClick={deleteUser}>
            DELETE ACCOUNT
          </button>
          <center></center>{" "}
        </div>
      </div>
    </div>
  );
}
