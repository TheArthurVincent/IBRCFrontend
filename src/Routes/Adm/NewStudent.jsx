import React, { useState } from "react";
import { HOne, RouteDiv } from "../../Resources/Components/RouteBox";
import axios from "axios";
import {
  InputField,
  Button,
  backDomain,
} from "../../Resources/UniversalComponents";
import { FormList } from "./Adm.Styled";

export function NewStudent() {
  const [loading, setLoading] = useState(false);
  const [newName, setNewName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newDateOfBirth, setNewDateOfBirth] = useState("2000-12-12");
  const [newCPF, setNewCPF] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newAnkiEmail, setNewAnkiEmail] = useState("");
  const [newAnkiPassword, setNewAnkiPassword] = useState("");
  const [newGoogleDriveLink, setNewGoogleDriveLink] = useState("");

  const handleSubmit = async (event) => {
    setLoading(true);
    let newStudent = {
      username: newUsername,
      password: newPassword,
      email: newEmail,
      name: newName,
      lastname: newLastName,
      doc: newCPF,
      phoneNumber: newPhone,
      dateOfBirth: newDateOfBirth,
      googleDriveLink: newGoogleDriveLink,
      ankiEmail: newAnkiEmail,
      ankiPassword: newAnkiPassword,
    };
    if (newPassword === confirmPassword) {
      setNewPassword(newPassword);
    } else {
      alert("As senhas são diferentes");
      event.preventDefault();
      return;
    }
    try {
      const response = await axios.post(
        `${backDomain}/api/v1/students/`,
        newStudent
      );
      window.location.reload();
      setLoading(false);

      alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      alert("Erro ao cadastrar usuário");
    }
  };
  return (
    <RouteDiv>
      <HOne>Novo Aluno</HOne>
      <form style={{ display: "grid", gap: "1rem" }} onSubmit={handleSubmit}>
        <FormList>
          <InputField
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
            id="name"
            placeholder="Nome"
            type="text"
          />
          <InputField
            value={newLastName}
            onChange={(event) => setNewLastName(event.target.value)}
            id="lastname"
            placeholder="Sobrenome"
            type="text"
          />
          <InputField
            value={newUsername}
            onChange={(event) => setNewUsername(event.target.value)}
            placeholder="Username"
            type="text"
          />
          <InputField
            value={newPhone}
            onChange={(event) => setNewPhone(event.target.value)}
            placeholder="Número de celular"
            type="number"
          />
          <InputField
            value={newEmail}
            onChange={(event) => setNewEmail(event.target.value)}
            placeholder="E-mail"
            type="email"
          />
          <InputField
            value={newDateOfBirth}
            onChange={(event) => setNewDateOfBirth(event.target.value)}
            placeholder="Data de nascimento"
            type="date"
          />
          <InputField
            value={newCPF}
            onChange={(event) => setNewCPF(event.target.value)}
            placeholder="CPF"
            type="number"
          />
          <InputField
            value={newAnkiEmail}
            onChange={(event) => setNewAnkiEmail(event.target.value)}
            placeholder="E-mail do Anki"
            type="text"
          />
          <InputField
            value={newAnkiPassword}
            onChange={(event) => setNewAnkiPassword(event.target.value)}
            placeholder="Senha do Anki"
            type="text"
          />
          <InputField
            value={newGoogleDriveLink}
            onChange={(event) => setNewGoogleDriveLink(event.target.value)}
            placeholder="Link do Drive"
            type="text"
          />
          <InputField
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
            placeholder="Escolha uma senha"
            type="password"
          />
          <InputField
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="Confirme a Senha"
            type="password"
          />
        </FormList>
        <Button style={{ marginLeft: "auto" }} type="submit">
          {loading ? "..." : "Criar"}
        </Button>
      </form>
    </RouteDiv>
  );
}

export default NewStudent;
