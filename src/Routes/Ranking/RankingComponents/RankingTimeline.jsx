import React, { useEffect, useState } from "react";
import {
  alwaysWhite,
  primaryColor,
  secondaryColor,
  textPrimaryColorContrast,
  textSecondaryColorContrast,
} from "../../../Styles/Styles";
import axios from "axios";
import { backDomain, formatDate } from "../../../Resources/UniversalComponents";
import { Button, CircularProgress } from "@mui/material";
import { DivHover, CenterRightToggle } from "./RankingComponents";

export default function RankingTimeline({ headers, display, id, name }) {
  const [localTimeline, setLocalTimeline] = useState([]);
  const [studentsList, setStudentsList] = useState([]);
  const [actualName, setActualName] = useState(name);
  const [newID, setNewID] = useState(id);
  const [loading, setLoading] = useState(true);

  const fetchStudents = async () => {
    if (id == "651311fac3d58753aa9281c5") {
      try {
        const response = await axios.get(`${backDomain}/api/v1/students/`, {
          headers,
        });
        setStudentsList(response.data.listOfStudents);
      } catch (error) {
        alert("Erro ao encontrar alunos");
      }
    } else {
    }
  };

  const seeScore = async (id) => {
    setLoading(true);
    fetchStudents();
    try {
      const response = await axios.get(`${backDomain}/api/v1/score/${id}`, {
        headers,
      });
      setLocalTimeline(response.data.scoreTimeline);
      setLoading(false);
      setNewID(id);
      seeName(id);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };
  const seeName = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${backDomain}/api/v1/studentname/${id}`,
        {
          headers,
        }
      );
      setActualName(response.data.name);
      setLoading(false);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };
  useEffect(() => {
    seeScore(newID);
    fetchStudents();
  }, [newID, id]);

  const handleStudentChange = (event) => {
    setNewID(event.target.value);
    seeName(event.target.value);
  };

  return (
    <div
      style={{
        display: display,
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
          <CircularProgress style={{ color: secondaryColor() }} />
        ) : (
          <Button
            onClick={() => seeScore(id)}
            style={{
              backgroundColor: textSecondaryColorContrast(),
              color: secondaryColor(),
            }}
          >
            <i className="fa fa-refresh" aria-hidden="true" />
          </Button>
        )}{" "}
        {id == "651311fac3d58753aa9281c5" && (
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
        )}
      </span>
      <span
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ textAlign: "center", margin: "0.5rem" }}>{actualName}</h1>
      </span>
      <div
        style={{
          maxHeight: "25rem",
          margin: "auto",
          overflow: "auto",
          padding: "1rem",
          fontWeight: 600,
          border: "solid 1px grey",
        }}
      >
        {loading ? (
          <CircularProgress style={{ color: secondaryColor() }} />
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
                    : item.type == "Live Class" || "Group Classes"
                    ? "fa fa-graduation-cap"
                    : "fa fa-pencil",
                color:
                  item.type == "Anki"
                    ? "#01BCFF"
                    : item.type == "Homework"
                    ? "#E6A020"
                    : item.type == "Extra activity"
                    ? "#123"
                    : item.type == "Live Class" || "Group Classes"
                    ? "#753"
                    : "#123",
              };

              return (
                <DivHover key={index}>
                  <span
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
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
                    />
                    <span>{item.type}</span>
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
                  <CenterRightToggle>
                    {formatDate(item.date)}
                    <br />
                    <span style={{ fontWeight: 400 }}>{item.description}</span>
                  </CenterRightToggle>
                </DivHover>
              );
            })}
          </>
        )}{" "}
      </div>
    </div>
  );
}
