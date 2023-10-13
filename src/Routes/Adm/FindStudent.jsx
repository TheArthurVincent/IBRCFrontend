import React, { useState, useEffect } from "react";
import axios from "axios";
import { HOne, RouteDiv } from "../../Resources/Components/RouteBox";
import {
  Spin,
  Xp,
  backDomain,
  linkReset,
} from "../../Resources/UniversalComponents";
import { useUserContext } from "../../Application/SelectLanguage/SelectLanguage";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab, Button } from "@mui/material";
import { Link } from "react-router-dom";
import {
  alwaysBlack,
  alwaysWhite,
  primaryColor,
  secondaryColor,
  textPrimaryColorContrast,
  textSecondaryColorContrast,
} from "../../Styles/Styles";

export function FindStudent() {
  const { UniversalTexts } = useUserContext();
  const [students, setStudents] = useState([]);
  const [newName, setNewName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [permissions, setPermissions] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [seeConfirmDelete, setSeeConfirmDelete] = useState(false);
  const [ID, setID] = useState(false);
  const [value, setValue] = useState("1");
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChangeEdit = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (event) => {
    setPermissions(event.target.value);
  };
  const handleSeeModal = () => {
    setIsVisible(!isVisible);
  };

  const handleConfirmDelete = () => {
    setSeeConfirmDelete(!seeConfirmDelete);
  };

  const seeEdition = async (id) => {
    handleSeeModal();
    try {
      const response = await axios.get(`${backDomain}/api/v1/student/${id}`);
      setNewName(response.data.formattedStudentData.name);
      setNewLastName(response.data.formattedStudentData.lastname);
      setNewUsername(response.data.formattedStudentData.username);
      setNewPhone(response.data.formattedStudentData.phoneNumber);
      setNewEmail(response.data.formattedStudentData.email);
      setPermissions(response.data.formattedStudentData.permissions);
      setID(response.data.formattedStudentData.id);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  const editStudent = async (id) => {
    let editedStudent = {
      username: newUsername,
      password: newPassword,
      email: newEmail,
      name: newName,
      lastname: newLastName,
      phoneNumber: newPhone,
      permissions: permissions,
    };
    if (newPassword === confirmPassword) {
      setNewPassword(newPassword);
    } else {
      alert("As senhas são diferentes");
      return;
    }
    try {
      const response = await axios.put(
        `${backDomain}/api/v1/students/${id}`,
        editedStudent
      );
      window.location.href = "/adm";
      alert("Usuário editado com sucesso!");
    } catch (error) {
      alert("Erro ao editar usuário");
    }
  };

  const editStudentPermissions = async (id) => {
    let editedStudent = {
      permissions: permissions,
    };
    try {
      const response = await axios.put(
        `${backDomain}/api/v1/studentpermissions/${id}`,
        editedStudent
      );
      window.location.href = "/adm";

      alert("Permissões editadas com sucesso!");
    } catch (error) {
      alert("Erro ao editar permissões");
    }
  };

  const editStudentPassword = async (id) => {
    let studentWhosePasswordYouWantToChange = {
      password: newPassword,
    };
    if (newPassword === confirmPassword) {
      setNewPassword(newPassword);
    } else {
      alert("As senhas são diferentes");
      return;
    }
    try {
      const response = await axios.put(
        `${backDomain}/api/v1/studentpassword/${id}`,
        studentWhosePasswordYouWantToChange
      );
      window.location.href = "/adm";

      alert("Senha editada com sucesso!");
    } catch (error) {
      alert("Erro ao editar senha");
    }
  };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`${backDomain}/api/v1/students/`);
        setStudents(response.data.listOfStudents);
        setLoading(false);
      } catch (error) {
        alert("Erro ao encontrar posts");
      }
    };

    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    try {
      const response = await axios.delete(
        `${backDomain}/api/v1/students/${id}`
      );
      alert("Aluno excluído");
      window.location.href = "/adm";
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  const seeAllClasses = async (id) => {
    try {
      const response = await axios.get(`${backDomain}/api/v1/tutoring/${id}`);

      setClasses(response.data.formattedTutoringFromParticularStudent);
    } catch (error) {
      alert("Erro ao listar aulas do mês");
    }
  };

  return (
    <RouteDiv style={{ margin: "1rem auto" }}>
      <HOne>{UniversalTexts.myStudents}</HOne>

      {!loading ? (
        students.map((student, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "4rem",
            }}
          >
            <div
              style={{
                padding: "0.6rem",
                color: alwaysBlack(),
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  borderRadius: "0.5rem",
                  padding: "0.2rem 1rem",
                  border: "1px solid",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <h1
                  style={{
                    fontSize: "1.2rem",
                    textAlign: "left",
                  }}
                >
                  {student.fullname}
                </h1>
                <Button onClick={() => seeEdition(student.id)}>Editar</Button>
              </div>
              <ul>
                <li>
                  <span
                    style={{
                      fontWeight: 600,
                    }}
                  >
                    {UniversalTexts.username}
                  </span>
                  : {student.username}
                </li>
                <li>
                  <span
                    style={{
                      fontWeight: 600,
                    }}
                  >
                    {UniversalTexts.document}
                  </span>
                  : {student.doc}
                </li>
                <li>
                  <span
                    style={{
                      fontWeight: 600,
                    }}
                  >
                    {UniversalTexts.id}
                  </span>
                  : {student.id}
                </li>

                <li>
                  <span
                    style={{
                      fontWeight: 600,
                    }}
                  >
                    {UniversalTexts.dateOfBirth}
                  </span>
                  : {student.dateOfBirth}
                </li>
                <li>
                  <span
                    style={{
                      fontWeight: 600,
                    }}
                  >
                    {UniversalTexts.email}
                  </span>
                  : {student.email}
                </li>
                <li>
                  <span
                    style={{
                      fontWeight: 600,
                    }}
                  >
                    {UniversalTexts.phoneNumber}
                  </span>
                  : {student.phoneNumber}
                </li>
                <li>
                  <span
                    style={{
                      fontWeight: 600,
                    }}
                  >
                    {UniversalTexts.permissions}
                  </span>
                  : {student.permissions}
                </li>
              </ul>
            </div>
          </div>
        ))
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>Carregando dados</p>
          <Spin>
            <img
              style={{ maxWidth: "3rem" }}
              src="https://ik.imagekit.io/vjz75qw96/assets/arvin_visuals/head-white.png?updatedAt=1687369608637"
              alt="loading"
            />
          </Spin>
        </div>
      )}

      <div
        className="modal"
        style={{
          display: isVisible ? "block" : "none",
          zIndex: 30,
          position: "fixed",
          backgroundColor: "rgba(0,0,0,0.5)",
          width: "10000px",
          height: "10000px",
          top: 0,
          left: 0,
        }}
      >
        <div
          className="modal"
          style={{
            position: "fixed",
            display: isVisible ? "block" : "none",
            zIndex: 100,
            backgroundColor: "#fff",
            padding: "1rem",
            width: "25rem",
            height: "32rem",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Xp onClick={() => handleSeeModal()}>X</Xp>
          <h1
            style={{
              fontSize: "1.5rem",
              marginBottom: 0,
              margin: "1rem 0",
              color: primaryColor(),
              padding: "0.5rem",
              backgroundColor: textPrimaryColorContrast(),
            }}
          >
            Editar aluno
          </h1>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChangeEdit}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Dados gerais" value="1" />
                <Tab label="Permissões" value="2" />
                <Tab label="Senha" value="3" />
                <Tab label="Aulas" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <form style={{ display: !seeConfirmDelete ? "block" : "none" }}>
                <input
                  value={newName}
                  onChange={(event) => setNewName(event.target.value)}
                  id="name"
                  placeholder="Nome"
                  type="text"
                  style={{
                    padding: "0.5rem",
                    marginBottom: "0.3rem",
                    fontSize: "1.1rem",
                    color: "#111",
                    margin: "0.5rem",
                  }}
                />
                <input
                  value={newLastName}
                  onChange={(event) => setNewLastName(event.target.value)}
                  id="lastname"
                  placeholder="Sobrenome"
                  type="text"
                  style={{
                    padding: "0.5rem",
                    marginBottom: "0.3rem",
                    fontSize: "1.1rem",
                    color: "#111",
                    margin: "0.5rem",
                  }}
                />
                <input
                  value={newUsername}
                  onChange={(event) => setNewUsername(event.target.value)}
                  placeholder="Username"
                  type="text"
                  disabled={true}
                  style={{
                    padding: "0.5rem",
                    marginBottom: "0.3rem",
                    fontSize: "1.1rem",
                    color: "#111",
                    margin: "0.5rem",
                  }}
                />
                <input
                  value={newPhone}
                  onChange={(event) => setNewPhone(event.target.value)}
                  placeholder="Número de celular"
                  type="number"
                  style={{
                    padding: "0.5rem",
                    marginBottom: "0.3rem",
                    fontSize: "1.1rem",
                    color: "#111",
                    margin: "0.5rem",
                  }}
                />
                <input
                  value={newEmail}
                  onChange={(event) => setNewEmail(event.target.value)}
                  placeholder="E-mail"
                  type="email"
                  style={{
                    padding: "0.5rem",
                    marginBottom: "0.3rem",
                    fontSize: "1.1rem",
                    color: "#111",
                    margin: "0.5rem",
                  }}
                />
              </form>
              <div
                style={{
                  marginTop: "2rem",
                  display: !seeConfirmDelete ? "flex" : "none",
                  justifyContent: "space-evenly",
                  gap: "0.5rem",
                }}
              >
                <Button
                  style={{
                    color: "#fff",
                    backgroundColor: "#ba3c3c",
                  }}
                  onClick={() => handleConfirmDelete()}
                >
                  Excluir
                </Button>
                <Button
                  style={{
                    color: "#fff",
                    backgroundColor: "#194169",
                  }}
                  onClick={() => handleSeeModal()}
                >
                  Cancelar
                </Button>
                <Button
                  style={{
                    color: "#fff",
                    backgroundColor: "#138017",
                  }}
                  onClick={() => editStudent(ID)}
                >
                  Salvar
                </Button>
              </div>
              <div
                style={{
                  marginTop: "1rem",
                  display: seeConfirmDelete ? "grid" : "none",
                  justifyContent: "space-evenly",
                  padding: "1rem",
                  backgroundColor: "#dd6e6e",
                  textAlign: "center",
                  borderRadius: "1rem",
                }}
              >
                <h3>
                  Esta ação não pode ser desfeita! Tem certeza que deseja
                  excluir o(a) aluno(a) <br />
                  <br />
                  <span
                    style={{
                      borderRadius: "1rem",
                      backgroundColor: "#111",
                      color: "#fff",
                      padding: "0.5rem",
                      margin: "0.5rem",
                    }}
                  >
                    {newName} {newLastName}
                  </span>
                  <br />
                  <br />?
                </h3>
                <div
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Button
                    style={{
                      color: "#fff",
                      backgroundColor: "#194169",
                    }}
                    onClick={() => handleConfirmDelete()}
                  >
                    Não!!
                  </Button>
                  <Button
                    style={{
                      color: "#fff",

                      backgroundColor: "#ba3c3c",
                    }}
                    onClick={() => deleteStudent(ID)}
                  >
                    Sim...
                  </Button>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div
                style={{
                  display: "grid",
                  alignContent: "center",
                  justifyItems: "center",
                }}
              >
                <select
                  id="permissions"
                  value={permissions}
                  onChange={handleChange}
                  style={{
                    padding: "0.5rem",
                    marginBottom: "0.3rem",
                    fontSize: "1.1rem",
                    color: "#111",
                    minWidth: "15rem",
                  }}
                >
                  <option value="permissions" hidden>
                    Permissions
                  </option>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="superadmin">Superadmin</option>
                </select>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    gap: "1rem",
                    marginTop: "2rem",
                  }}
                >
                  <Button
                    style={{
                      color: "#fff",
                      width: "8rem",
                      backgroundColor: "#194169",
                    }}
                    onClick={() => handleSeeModal()}
                  >
                    Cancelar
                  </Button>
                  <Button
                    style={{
                      color: "#fff",
                      width: "8rem",
                      backgroundColor: "#138017",
                    }}
                    onClick={() => editStudentPermissions(ID)}
                  >
                    Salvar
                  </Button>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div
                style={{
                  display: "grid",
                  alignContent: "center",
                  justifyItems: "center",
                }}
              >
                <input
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                  placeholder="Escolha uma nova senha"
                  type="password"
                  style={{
                    padding: "0.5rem",
                    marginBottom: "0.3rem",
                    fontSize: "1.1rem",
                    color: "#111",
                    margin: "0.5rem",
                  }}
                />
                <input
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="Confirme a Senha"
                  type="password"
                  style={{
                    padding: "0.5rem",
                    marginBottom: "0.3rem",
                    fontSize: "1.1rem",
                    color: "#111",
                    margin: "0.5rem",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    gap: "1rem",
                    marginTop: "2rem",
                  }}
                >
                  <Button
                    style={{
                      color: "#fff",
                      width: "8rem",
                      backgroundColor: "#194169",
                    }}
                    onClick={() => handleSeeModal()}
                  >
                    Cancelar
                  </Button>
                  <Button
                    style={{
                      color: "#fff",
                      width: "8rem",
                      backgroundColor: "#138017",
                    }}
                    onClick={() => editStudentPassword(ID)}
                  >
                    Salvar
                  </Button>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="4">
              <button onClick={() => seeAllClasses(ID)}>ver aulas</button>
              {classes.map((item, index) => (
                <div key={index}>
                  <p>{item.videoUrl}</p>
                  <p>{item.title}</p>
                  <p>{item.date}</p>
                  <p>{item.comments}</p>
                  <Link to={item.attachments} style={linkReset} target="_blank">
                    {UniversalTexts.attachments}
                  </Link>
                </div>
              ))}
            </TabPanel>
          </TabContext>
        </div>
      </div>
    </RouteDiv>
  );
}

export default FindStudent;
