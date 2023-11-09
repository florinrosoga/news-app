import React from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

export default function Navbar() {
  var loginStatus = JSON.parse(localStorage.getItem("login-status"));
  var navigate = useNavigate();
  function logout() {
    localStorage.removeItem("login-status");
    navigate("/");
  }

  function editProfile() {
    navigate("/editUser");
  }
  return (
    <div>
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg stroke p-0">
            <h1>
              {" "}
              <Link className="navbar-brand" to="/">
                <span className="fa fa-newspaper"></span> News World
              </Link>
            </h1>
            <button
              className="navbar-toggler  collapsed bg-gradient"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
              <span className="navbar-toggler-icon fa icon-close fa-times"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-lg-5 mr-lg-auto">
                <li className="nav-item ">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                {loginStatus === true ? (
                  <>
                    <li className="nav-item ">
                      <Link className="nav-link" to="/techNews">
                        TechNews <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="nav-item ">
                      <Link className="nav-link" to="/travelNews">
                        TravelNews <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="nav-item ">
                      <Link className="nav-link" to="/sportNews">
                        SportNews <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                  </>
                ) : null}
              </ul>

              <div className="navbar-nav search-right nav-item dropdown">
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="search_form"></div>
                </div>
              </div>
            </div>

            <div className="mobile-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" for="checkbox">
                    <input type="checkbox" id="checkbox" />
                  </label>
                </div>
              </nav>
            </div>
            {loginStatus !== true ? (
              <>
                {" "}
                <li className="nav-item ">
                  <Link className="nav-link" to="/signup">
                    Login/SignUp <span className="sr-only">(current)</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button className="logout-btn" onClick={logout}>
                    Logout
                  </button>
                </li>
                <li className="nav-item">
                  <button className="logout-btn" onClick={editProfile}>
                    Edit Profile
                  </button>
                </li>
              </>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
}
