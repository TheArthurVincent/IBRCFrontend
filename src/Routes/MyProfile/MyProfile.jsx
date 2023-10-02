import React, { useEffect, useState } from "react";
import {
  HOne,
  RouteDiv,
  RouteSizeControlBox,
} from "../../Resources/Components/RouteBox";
import { useUserContext } from "../../Application/SelectLanguage/SelectLanguage";
import { BackToHomePage } from "../../Resources/UniversalComponents";
import TopBar from "../../Application/TopBar/TopBar";

export function MyProfile() {
  const [user, setUser] = useState({});
  useEffect(() => {
    let getLoggedUser = JSON.parse(localStorage.getItem("loggedIn"));
    setUser(getLoggedUser);
  }, []);

  const { UniversalTexts } = useUserContext();
  return (
    <>
      <TopBar />
      <RouteSizeControlBox>
        <RouteDiv>
          <HOne>{UniversalTexts.myProfile}</HOne>
          <BackToHomePage />
          <div style={{ padding: "0.5rem" }}>
            <p>
              {UniversalTexts.name}: {user.name} {user.lastname}
            </p>
            <p>
              {UniversalTexts.document}: {user.doc}
            </p>
            <p>
              {UniversalTexts.phoneNumber}: {user.phoneNumber}
            </p>
            <p>
              {UniversalTexts.dateOfBirth}: {user.dateOfBirth}
            </p>
            <p>
              {UniversalTexts.email}: {user.email}
            </p>
            <p>
              {UniversalTexts.username}: {user.username}
            </p>
          </div>
        </RouteDiv>
      </RouteSizeControlBox>
    </>
  );
}

export default MyProfile;
