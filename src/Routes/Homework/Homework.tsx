import React, { useEffect, useState } from "react";
import { MyHeadersType } from "../../Resources/types.universalInterfaces";
import { HOne, HTwo, RouteDiv } from "../../Resources/Components/RouteBox";
import Helmets from "../../Resources/Helmets";
import { SectionHW } from "./Homework.Styled";
import { Link } from "react-router-dom";
import { backDomain, formatDateBr } from "../../Resources/UniversalComponents";
import { primaryColor, secondaryColor } from "../../Styles/Styles";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { ArvinButton } from "../../Resources/Components/ItemsLibrary";
import { listOfCriteria } from "../Ranking/RankingComponents/ListOfCriteria";

interface HWProps {
  headers: MyHeadersType | null;
  setChange: any;
  change: boolean;
}
export function Homework({ headers, setChange, change }: HWProps) {
  const [groupList, setGroupList] = useState<any>([]);
  const [tutoringList, setTutoringList] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [studentsList, setStudentsList] = useState<any>([]);
  const [studentID, setStudentID] = useState<string>("");
  const [myId, setMyId] = useState<string>("");
  const handleStudentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStudentID(event.target.value);
    fetchClasses(event.target.value);
  };
  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${backDomain}/api/v1/students/`, {
        headers: actualHeaders,
      });
      setStudentsList(response.data.listOfStudents);
    } catch (error) {
      alert("Erro ao encontrar alunos");
    }
  };

  const actualHeaders = headers || {};

  const fetchClasses = async (studentId: string) => {
    // setLoading(true);
    try {
      var response = await axios.get(
        `${backDomain}/api/v1/homework/${studentId}`,
        {
          headers: actualHeaders,
        }
      );
      const gc = response.data.groupClassHomeworkList;
      const tt = response.data.tutoringHomeworkList;
      setGroupList(gc);
      setTutoringList(tt);
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.log(error, "erro ao listar homework");
      // setLoading(false);
    }
  };
  useEffect(() => {
    const getLoggedUser = JSON.parse(localStorage.getItem("loggedIn") || "{}");
    //@ts-ignore
    const { id, permissions } = getLoggedUser;
    setMyId(id);
    fetchClasses(id);

    permissions == "superadmin" ? fetchStudents() : null;
  }, []);

  const updateRealizedClass = async (tutoringId: string, score: number) => {
    try {
      const response = await axios.put(
        `${backDomain}/api/v1/homework/${studentID}`,
        {
          tutoringId,
          score,
        },
        {
          headers: actualHeaders,
        }
      );
      setChange(!change);
      fetchClasses(studentID);
      console.log(response.data);
    } catch (error) {
      alert("Erro ao encontrar alunos");
    }
  };
  const pointsHW = (dueDate: string) => {
    const pointsMadeHW = listOfCriteria[0].score[0].score;
    const pointsLateHW = listOfCriteria[0].score[1].score;

    const currentDate = new Date();
    const dueDateObj = new Date(dueDate);

    if (dueDateObj < currentDate) {
      return pointsLateHW;
    } else {
      return pointsMadeHW;
    }
  };

  const pointsGC = (dueDate: string) => {
    const pointsMadeGC = listOfCriteria[2].score[0].score;
    const pointsLateGC = listOfCriteria[2].score[1].score;

    const currentDate = new Date();
    const dueDateObj = new Date(dueDate);

    if (dueDateObj < currentDate) {
      return pointsLateGC;
    } else {
      return pointsMadeGC;
    }
  };

  return (
    <RouteDiv className="smooth">
      <Helmets text="Homework" />
      <HOne>Homework</HOne>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-between",
        }}
      >
        <ArvinButton onClick={() => fetchClasses(studentID)}>
          <i className="fa fa-refresh" aria-hidden="true" />
        </ArvinButton>
        {myId === "651311fac3d58753aa9281c5" && (
          <div
            style={{
              display: "inline",
            }}
          >
            <select onChange={handleStudentChange} value={studentID}>
              {studentsList.map((student: any, index: number) => (
                <option key={index} value={student.id}>
                  {student.name + " " + student.lastname}{" "}
                </option>
              ))}
            </select>
            <ArvinButton color="green" onClick={fetchStudents}>
              <i className="fa fa-refresh" aria-hidden="true" />
              <i className="fa fa-user" aria-hidden="true" />
            </ArvinButton>
          </div>
        )}
      </div>
      {loading ? (
        <CircularProgress />
      ) : (
        <SectionHW>
          <article>
            <HTwo>Tutorings</HTwo>
            <ul
              style={{
                overflowY: "auto",
                maxHeight: "70vh",
                padding: "1px",
                border: "1px solid black",
              }}
            >
              {tutoringList.map((homework: any, index: number) => {
                return (
                  <li
                    key={index}
                    style={{
                      marginBottom: "1px",
                      textDecoration: "none",
                      display: "grid",
                      gap: "8px",
                      listStyle: "none",
                      padding: "1rem",
                      border: `1px solid ${primaryColor()}`,
                    }}
                  >
                    <h2
                      style={{
                        padding: "none",
                        margin: "none",
                      }}
                    >
                      Title: {formatDateBr(homework.assignmentDate)}
                    </h2>
                    <div>
                      <i
                        style={{
                          display: "inline",
                          color:
                            homework?.status == "done" ? "green" : "orange",
                        }}
                        className={`fa fa-${
                          homework?.status == "done"
                            ? "check-circle"
                            : "ellipsis-h"
                        }`}
                        aria-hidden="true"
                      />{" "}
                      Due date: {formatDateBr(homework.dueDate)}
                    </div>
                    <div style={{ display: "flex", gap: "5px" }}>
                      {homework.status && (
                        <>
                          {myId === "651311fac3d58753aa9281c5" &&
                            homework.status !== "done" && (
                              <ArvinButton
                                onClick={() =>
                                  updateRealizedClass(
                                    homework._id,
                                    pointsHW(homework.dueDate)
                                  )
                                }
                              >
                                <i
                                  className="fa fa-check-circle"
                                  aria-hidden="true"
                                />
                              </ArvinButton>
                            )}
                        </>
                      )}
                    </div>
                    <div style={{ width: "20rem" }}>
                      <div
                        style={{
                          backgroundColor: "#eee",
                          padding: "1rem",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: homework.description,
                        }}
                      />
                    </div>

                    <Link to={homework.googleDriveLink}>
                      Access the class here
                    </Link>
                  </li>
                );
              })}
            </ul>
          </article>
          <article>
            <HTwo>Group Classes</HTwo>
            <ul
              style={{
                overflowY: "auto",
                maxHeight: "70vh",
                padding: "1px",
                border: "1px solid black",
              }}
            >
              {groupList.map((homework: any, index: number) => {
                return (
                  <li
                    key={index}
                    style={{
                      marginBottom: "1px",
                      textDecoration: "none",
                      display: "grid",
                      gap: "8px",
                      listStyle: "none",
                      padding: "1rem",
                      border: `1px solid ${secondaryColor()}`,
                    }}
                  >
                    <HTwo>Title: {formatDateBr(homework.assignmentDate)}</HTwo>
                    <div>
                      <i
                        style={{
                          display: "inline",
                          color:
                            homework?.status == "done" ? "green" : "orange",
                        }}
                        className={`fa fa-${
                          homework?.status == "done"
                            ? "check-circle"
                            : "ellipsis-h"
                        }`}
                        aria-hidden="true"
                      />{" "}
                      Due date: {formatDateBr(homework.dueDate)}
                    </div>
                    {homework.status && (
                      <>
                        {myId === "651311fac3d58753aa9281c5" &&
                          homework.status !== "done" && (
                            <ArvinButton
                              onClick={() =>
                                updateRealizedClass(
                                  homework._id,
                                  pointsGC(homework.dueDate)
                                )
                              }
                            >
                              <i
                                className="fa fa-check-circle"
                                aria-hidden="true"
                              />
                            </ArvinButton>
                          )}
                      </>
                    )}

                    <div style={{ display: "flex", gap: "5px" }}></div>
                    <div style={{ width: "20rem" }}>
                      <div
                        style={{
                          backgroundColor: "#eee",
                          padding: "1rem",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: homework.description,
                        }}
                      />
                    </div>
                    <Link to={homework.googleDriveLink}>
                      Access the class here
                    </Link>
                  </li>
                );
              })}
            </ul>
          </article>
        </SectionHW>
      )}{" "}
    </RouteDiv>
  );
}

export default Homework;
