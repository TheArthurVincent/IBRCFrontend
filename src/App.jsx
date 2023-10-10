import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./Application/SelectLanguage/SelectLanguage";
import Login from "./Routes/Login/Login";
import HomePage from "./Routes/HomePage";
import Adm from "./Routes/Adm/Adm";
import PhrasalVerbs from "./Routes/ClassesToTeach/PhrasalVerbs/PhrasalVerbs";
import MyClasses from "./Routes/MyClasses/MyClasses";
import Extras from "./Routes/Extras/Extras";
import MyProfile from "./Routes/MyProfile/MyProfile";
import ClassesToTeach from "./Routes/ClassesToTeach/ClassesToTeach";
import { primaryContrast, secondaryColor } from "./Styles/Styles";
import { logout24h } from "./Resources/UniversalComponents";

function App() {
  const verifyToken = () => {
    const token = localStorage.getItem("authorization");
    return token;
  };

  useEffect(() => {
    logout24h();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: "100vw",
        }}
      >
        <UserProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={verifyToken() ? <HomePage /> : <Login />}
              />
              <Route
                path="/homepage/*"
                element={verifyToken() ? <HomePage /> : <Login />}
              />
              <Route
                path="/extras"
                element={verifyToken() ? <Extras /> : <Login />}
              />
              <Route
                path="/adm"
                element={verifyToken() ? <Adm /> : <Login />}
              />
              <Route
                path="/my-classes"
                element={verifyToken() ? <MyClasses /> : <Login />}
              />
              <Route
                path="/my-profile"
                element={verifyToken() ? <MyProfile /> : <Login />}
              />
              <Route
                path="/classes-to-teach"
                element={verifyToken() ? <ClassesToTeach /> : <Login />}
              />
              <Route
                path="/phrasal-verbs"
                element={verifyToken() ? <PhrasalVerbs /> : <Login />}
              />
            </Routes>
          </Router>
        </UserProvider>
      </div>
      <footer
        style={{
          textAlign: "center",
          padding: "0.7rem",
          display: "flex",
          bottom: "0vh",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.7rem",
          backgroundColor: secondaryColor(),
          color: primaryContrast(),
          width: "100vw",
        }}
      >
        <img
          style={{
            maxWidth: "3rem",
          }}
          src="https://ik.imagekit.io/vjz75qw96/assets/arvin_visuals/head-white.png?updatedAt=1687369608637"
          alt=""
        />
        <span> Arthur Vincent © Some rights reserved</span>{" "}
      </footer>
    </div>
  );
}

export default App;
