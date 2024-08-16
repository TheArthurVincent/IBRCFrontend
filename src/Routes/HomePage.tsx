import React, { useEffect, useState } from "react";
import { Login } from "@mui/icons-material";
import { verifyToken } from "../App";
import { Outlet, Route, Routes } from "react-router-dom";
import { pathGenerator } from "../Resources/UniversalComponents";
import MyProfile from "./MyProfile/MyProfile";
import Faq from "./Faq/Faq";
import MyCalendar from "./MyCalendar/MyCalendar";
import Adm from "./Adm/Adm";
import Blog from "./Blog/Blog";
import { BlogRouteSizeControlBox } from "../Resources/Components/RouteBox";
import { HeadersProps } from "../Resources/types.universalInterfaces";
import { TopBar } from "../Application/TopBar/TopBar";
import EnglishCourses from "./EnglishLessons/EnglishCourses";
import AppFooter from "../Application/Footer/Footer";

export function HomePage({ headers }: HeadersProps) {
  const [thePermissions, setPermissions] = useState<string>("");
  const [admin, setAdmin] = useState<boolean>(false);
  const [_StudentId, setStudentId] = useState<string>("");

  useEffect(() => {
    const user = localStorage.getItem("loggedIn");
    if (user) {
      const { permissions,  id } = JSON.parse(user);
      setPermissions(permissions);
      setStudentId(id || _StudentId);
      setAdmin(permissions === "superadmin" ? true : false);
    } else {
      return;
    }
  }, []);

  const [see, setSee] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setSee(true);
    }, 700);
  }, []);

  const appRoutes = [
    {
      path: "/",
      title: "My Calendar",
      component: (
        <MyCalendar thePermissions={thePermissions} headers={headers} />
      ),
    },
    {
      title: "English Courses",
      component: <EnglishCourses headers={headers} />,
    },
    {
      title: "FAQ",
      component: <Faq headers={headers} />,
    },
    {
      title: "My Profile",
      component: <MyProfile headers={headers} />,
    },
    {
      path: "/adm-businessmanagement",
      title: "Adm",
      component:
        verifyToken() && admin ? (
          <Adm headers={headers} />
        ) : (
          <Blog headers={headers} />
        ),
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-between",
      }}
    >
      <TopBar />
      <Routes>
        {appRoutes.map((component, index) => {
          return (
            <Route
              key={index}
              path={`${
                component.path ? component.path : pathGenerator(component.title)
              }/*`}
              element={
                verifyToken() ? (
                  <BlogRouteSizeControlBox
                    style={{ gap: "1rem", marginTop: "4.5rem" }}
                    className="smooth"
                  >
                    {component.component}
                  </BlogRouteSizeControlBox>
                ) : (
                  <Login />
                )
              }
            />
          );
        })}
      </Routes>
      <AppFooter see={see} />
      <Outlet />
    </div>
  );
}

export default HomePage;
