import React, { useEffect, useState } from "react";
import {
  HOne,
  RouteDiv,
  RouteSizeControlBox,
} from "../../Resources/Components/RouteBox";
import { useUserContext } from "../../Application/SelectLanguage/SelectLanguage";
import { backDomain, formatDateBr } from "../../Resources/UniversalComponents";
import { alwaysBlack } from "../../Styles/Styles";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";
import { User } from "./types.MyProfile";
import { HeadersProps } from "../../Resources/types.universalInterfaces";
import Helmets from "../../Resources/Helmets";
import { ArvinButton } from "../../Resources/Components/ItemsLibrary";

export function MyProfile({ headers }: HeadersProps) {
  const { UniversalTexts } = useUserContext();

  const [user, setUser] = useState<User>({} as User);
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  useEffect(() => {
    const getLoggedUser: User = JSON.parse(
      localStorage.getItem("loggedIn") || ""
    );
    setUser(getLoggedUser);
  }, []);

  const editStudentPassword = async (): Promise<void> => {
    if (newPassword === confirmPassword) {
      setNewPassword(newPassword);
    } else {
      alert("As senhas são diferentes");
      return;
    }
    const actualHeaders = headers || {};

    try {
      const response = await axios.put(
        `${backDomain}/api/v1/studentperspassword/${user.id}`,
        { newPassword },
        { headers: actualHeaders }
      );
      setConfirmPassword("");
      setNewPassword("");
      alert("Senha editada com sucesso!");
    } catch (error) {
      alert("Erro ao editar senha");
    }
  };

  const myProfileList = [
    { title: UniversalTexts.name, data: user.name + " " + user.lastname },
    { title: UniversalTexts.document, data: user.doc },
    { title: UniversalTexts.phoneNumber, data: user.phoneNumber },
    { title: UniversalTexts.email, data: user.email },
    { title: UniversalTexts.username, data: user.username },
    { title: UniversalTexts.dateOfBirth, data: formatDateBr(user.dateOfBirth) },
    {
      title: UniversalTexts.googleDriveLink,
      data: user.googleDriveLink,
      link: user.googleDriveLink,
    },
  ];

  return (
    <>
      {headers ? (
        <RouteSizeControlBox className="smooth grid-flex">
          <Helmets text="My Profile" />
          <RouteDiv>
            <HOne>{UniversalTexts.myProfile}</HOne>
            <ul
              style={{
                display: "grid",
                gap: "5px",
                color: alwaysBlack(),
                padding: "0.2rem",
              }}
            >
              {/* <ArvinButton type="navy">oi</ArvinButton> */}
              {myProfileList.map((item: any, index: number) => {
                return (
                  <li
                    key={index + item}
                    style={{
                      listStyle: "none",
                    }}
                  >
                    <b>{item.title}: </b>
                    {item.link ? (
                      <NavLink to={item.link}>{item.data}</NavLink>
                    ) : (
                      <span>{item.data}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </RouteDiv>
          <RouteDiv>
            <HOne>{UniversalTexts.newPassword}</HOne>
            <form
              style={{
                textAlign: "center",
              }}
            >
              <input
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
                placeholder={UniversalTexts.newPassword}
                type="password"
                className="inputs-style"
              />
              <input
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder={UniversalTexts.confirmNewPassword}
                type="password"
                className="inputs-style"
              />
              <Button
                style={{
                  color: "#fff",
                  width: "8rem",
                  backgroundColor: "#138017",
                }}
                onClick={() => editStudentPassword()}
              >
                Salvar
              </Button>
            </form>
          </RouteDiv>
        </RouteSizeControlBox>
      ) : (
        <RouteSizeControlBox>Nenhum usuário logado</RouteSizeControlBox>
      )}
    </>
  );
}

export default MyProfile;
