import React, { useEffect, useState } from "react";
import {
  alwaysWhite,
  primaryColor,
  textPrimaryColorContrast,
} from "../../../Styles/Styles";
import axios from "axios";
import {
  Disapear,
  DivHover,
  backDomain,
  formatDate,
} from "../../../Resources/UniversalComponents";
import { Button, CircularProgress } from "@mui/material";

export default function RankingTimeline({
  timeline,
  headers,
  display,
  position,
  id,
  name,
}) {
  const [localTimeline, setLocalTimeline] = useState([]);
  const [studentsList, setStudentsList] = useState([]);
  const [IDMASTER, setIDMASTER] = useState("");
  const [loadingList, setLoadingList] = useState(true);

  const fetchStudents = async () => {
    setLoadingList(true);
    let getLoggedUser = JSON.parse(localStorage.getItem("loggedIn"));
    setIDMASTER(getLoggedUser.id);
    if (IDMASTER === id) {
      console.log("true");
      try {
        const response = await axios.get(`${backDomain}/api/v1/students/`, {
          headers,
        });
        setStudentsList(response.data.listOfStudents);
        setLoadingList(false);
      } catch (error) {
        alert("Erro ao encontrar alunos");
      }
    } else {
    }
  };

  const [newID, setNewID] = useState(id);
  const [loading, setLoading] = useState(true);

  const seeScore = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`${backDomain}/api/v1/score/${id}`, {
        headers,
      });
      setLocalTimeline(response.data.scoreTimeline);
      setLoading(false);
      // fetchStudents();
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };
  useEffect(() => {
    seeScore(newID);
    // fetchStudents();
  }, [newID, id]);

  const handleStudentChange = (event) => {
    setNewID(event.target.value);
  };

  return (
    <div
      style={{
        display: display,
        position: position,
        top: "10%",
        borderRadius: "1rem",
        left: "30%",
        color: primaryColor(),
        backgroundColor: textPrimaryColorContrast(),
        padding: "1rem",
      }}
    >
      <span>
        {loading ? (
          <CircularProgress />
        ) : (
          <Button onClick={() => seeScore(id)}>
            <i className="fa fa-refresh" aria-hidden="true" />
          </Button>
        )}{" "}
        {IDMASTER == "651311fac3d58753aa9281c5" &&
          (loadingList ? (
            <CircularProgress />
          ) : (
            <select
              onChange={handleStudentChange}
              name="students"
              id=""
              value={newID}
            >
              {studentsList.map((student, index) => {
                return (
                  <option key={index} value={student.id}>
                    {student.name + " " + student.lastname}
                  </option>
                );
              })}
            </select>
          ))}
      </span>
      <span
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ textAlign: "center", margin: "0.5rem" }}>{name}</h1>
        <p
          style={{
            fontSize: "1.5rem",
            cursor: "pointer",
            fontWeight: 900,
            display: position === "fixed" ? "block" : "none",
          }}
        >
          x
        </p>
      </span>
      <div
        style={{
          maxHeight: "25rem",
          margin: "auto",
          maxWidth: "50rem",
          overflow: "auto",
          padding: "1rem",
          fontWeight: 600,
          border: "solid 1px grey",
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            {localTimeline.map((item, index) => {
              const variables = {
                type:
                  item.type == "Anki"
                    ? "fa fa-star-o"
                    : item.type == "Homework"
                    ? "fa fa-book"
                    : item.type == "Extra activity"
                    ? "fa fa-users"
                    : item.type == "Live Class"
                    ? "fa fa-graduation-cap"
                    : "fa fa-pencil",
                color:
                  item.type == "Anki"
                    ? "#01BCFF"
                    : item.type == "Homework"
                    ? "#E6A020"
                    : item.type == "Extra activity"
                    ? "#123"
                    : item.type == "Live Class"
                    ? "#753"
                    : "#123",
              };

              return (
                <DivHover key={index}>
                  <div>
                    <div
                      style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        display: "flex",
                        gap: "10px",
                        fontFamily: "Athiti",
                        padding: "0.5rem 0",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "1rem",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        {" "}
                        <i
                          color=""
                          style={{
                            backgroundColor: variables.color,
                            color: "white",
                            padding: "0.5rem",
                            borderRadius: "50%",
                            fontWeight: 700,
                            transform: "rotate(-25deg)",
                          }}
                          className={variables.type}
                          aria-hidden="true"
                        />{" "}
                        <span>{item.type}</span>
                      </div>
                      <span>
                        <Disapear>
                          {formatDate(item.date)} | {item.description} |{" "}
                        </Disapear>
                        <span
                          style={{
                            color: alwaysWhite(),
                            padding: "0.5rem",
                            borderRadius: "0.5rem",
                            backgroundColor: item.score < 0 ? "red" : "green",
                          }}
                        >
                          {" "}
                          {item.score}{" "}
                        </span>
                      </span>
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                      }}
                    ></div>
                  </div>
                </DivHover>
              );
            })}
          </>
        )}{" "}
      </div>
    </div>
  );
}
