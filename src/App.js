import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import TechNews from "./Components/TechNews";
import SportNews from "./Components/SportNews";
import TravelNews from "./Components/TravelNews";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ViewNews from "./Components/ViewNews";
import SubHeader from "./Components/SubHeader";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import EditUser from "./Components/EditUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Header />
                <TechNews />
                <SportNews />
                <TravelNews />
              </>
            }
          />
          <Route
            path="/techNews"
            element={
              <>
                <Navbar />
                <SubHeader headerName="Technology News" />
                <ViewNews title="technology" headerName="Technology News" />
              </>
            }
          />
          <Route
            path="/sportNews"
            element={
              <>
                <Navbar />
                <SubHeader headerName="Sport News" />
                <ViewNews title="sports" headerName="Sport News" />
              </>
            }
          />
          <Route
            path="/travelNews"
            element={
              <>
                <Navbar />
                <SubHeader headerName="Travel News" />
                <ViewNews title="travel" headerName="Travel News" />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Navbar />
                <SubHeader headerName="Login" />
                <LoginPage />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Navbar />
                <SubHeader headerName="SignUp" />
                <SignUpPage />
              </>
            }
          />
          <Route
            path="/edituser"
            element={
              <>
                <Navbar />
                <SubHeader headerName="EditUser" />
                <EditUser />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
