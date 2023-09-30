import React from "react";
import {
  HOne,
  RouteDiv,
  RouteSizeControlBox,
} from "../../Resources/Components/RouteBox";
import { useUserContext } from "../../Application/SelectLanguage/SelectLanguage";
import { NavLink } from "react-router-dom";

export function MyProfile({ user }) {
  const { UniversalTexts } = useUserContext();
  console.log(user);
  return (
    <RouteSizeControlBox>
      <NavLink to="/oi">oi</NavLink>
      <RouteDiv>
        <HOne>{UniversalTexts.myProfile}</HOne>
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
      </RouteDiv>
    </RouteSizeControlBox>
  );
}

export default MyProfile;
