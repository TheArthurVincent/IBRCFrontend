import React, { useEffect, useState } from "react";
import {
  AnimatedLi,
  RouteDiv,
} from "../../../Resources/Components/RouteBox";
import {
  ImgResponsive0,
  backDomain,
} from "../../../Resources/UniversalComponents";
import { Button, CircularProgress, Tooltip } from "@mui/material";
import axios from "axios";
import theitems from "./ranking.json";
import { levels } from "./RankingLevelsList";

export default function StudentsRanking({ headers }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const theItems = levels();

  useEffect(() => {
    let getLoggedUser = JSON.parse(localStorage.getItem("loggedIn"));
    setUser(getLoggedUser);
  }, []);

  const fetchStudents = async () => {
    setLoading(true);

    try {
      const response = await axios.get(`${backDomain}/api/v1/scoresranking/`, {
        headers,
      });
      setStudents(response.data.listOfStudents);
      setLoading(false);
    } catch (error) {
      alert("Erro ao encontrar alunos");
    }
  };
  useEffect(() => {
    fetchStudents(theItems);
    console.log();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Button onClick={() => fetchStudents()}>
          <i className="fa fa-refresh" aria-hidden="true"></i>
        </Button>
        <h2>Apenas os primeiros 5 colocados são mostrados na lista!</h2>
      </div>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          {students.map((item, index) => {
            const levelNumber =
              item.totalScore >= 10000 && item.totalScore < 20000
                ? 1
                : item.totalScore >= 20000 && item.totalScore < 35000
                ? 2
                : item.totalScore >= 35000 && item.totalScore < 50000
                ? 3
                : item.totalScore >= 50000 && item.totalScore < 65000
                ? 4
                : item.totalScore >= 65000 && item.totalScore < 80000
                ? 5
                : item.totalScore >= 80000 && item.totalScore < 100000
                ? 6
                : item.totalScore >= 100000 && item.totalScore < 2000000
                ? 7
                : item.totalScore >= 2000000
                ? 8
                : 0;
            return (
              <>
                <RouteDiv
                  style={{
                    padding: "0.5rem 1rem",
                    margin: "1rem 0",
                    display: item.id === user.id ? "flex" : "none",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: theitems.items[levelNumber].color,
                    color: theitems.items[levelNumber].textcolor,
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <h1
                      style={{
                        fontWeight: 600,
                        margin: 0,
                        padding: "5px",
                        background: theitems.items[levelNumber].color,
                        color: theitems.items[levelNumber].textcolor,
                      }}
                    >
                      #{index + 1} | {item.name}
                    </h1>
                  </div>
                  <div>
                    <p>
                      Monthly Score:{" "}
                      <span
                        style={{
                          fontWeight: "600",
                        }}
                      >
                        {item.monthlyScore}
                      </span>
                    </p>
                    <p>
                      Total Score:{" "}
                      <span
                        style={{
                          fontWeight: "600",
                        }}
                      >
                        {item.totalScore}
                      </span>
                    </p>
                  </div>
                </RouteDiv>
              </>
            );
          })}

          {students.map((item, index) => {
            const levelNumber =
              item.totalScore >= 10000 && item.totalScore < 20000
                ? 1
                : item.totalScore >= 20000 && item.totalScore < 35000
                ? 2
                : item.totalScore >= 35000 && item.totalScore < 50000
                ? 3
                : item.totalScore >= 50000 && item.totalScore < 65000
                ? 4
                : item.totalScore >= 65000 && item.totalScore < 80000
                ? 5
                : item.totalScore >= 80000 && item.totalScore < 100000
                ? 6
                : item.totalScore >= 100000 && item.totalScore < 2000000
                ? 7
                : item.totalScore >= 2000000
                ? 8
                : 0;
            return (
              <ul>
                <AnimatedLi
                  key={index}
                  index={index}
                  style={{
                    display:
                      index < 5 && item.monthlyScore > 0 ? "flex" : "none",
                    background: theitems.items[levelNumber].color,
                    border: `solid 2px ${theitems.items[levelNumber].textcolor}`,
                    color: theitems.items[levelNumber].textcolor,
                  }}
                >
                  <ImgResponsive0
                    src={theItems[levelNumber].image2}
                    alt="level"
                  />
                  <div
                    style={{
                      display: "grid",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 600,
                        fontFamily: "Athiti",
                        margin: 0,
                        padding: "5px",
                        fontSize: "1.1rem",
                        background: theitems.items[levelNumber].color,
                        color: theitems.items[levelNumber].textcolor,
                      }}
                    >
                      #{index + 1} | {item.name}
                    </p>
                    <img
                      style={{
                        width: "5rem",
                        height: "5rem",
                        objectFit: "cover",
                        border: "solid 0.2rem #555",
                        margin: "0.9rem",
                        borderRadius: "50%",
                        border: `solid 2px ${theitems.items[levelNumber].textcolor}`,
                      }}
                      src={item.picture}
                    />
                  </div>

                  <div
                    style={{
                      fontSize: "1rem",
                      color: theitems.items[levelNumber].textcolor,
                    }}
                  >
                    <h2>
                      <i
                        className={theitems.items[levelNumber].icon}
                        aria-hidden="true"
                      />{" "}
                      {theitems.items[levelNumber].text}
                    </h2>

                    <p>
                      Monthly Score:{" "}
                      <span
                        style={{
                          fontFamily: "Athiti",
                          fontWeight: "600",
                        }}
                      >
                        {item.monthlyScore}
                      </span>
                    </p>
                    <p>
                      Total Score:{" "}
                      <span
                        style={{
                          fontFamily: "Athiti",
                          fontWeight: "600",
                        }}
                      >
                        {item.totalScore}
                      </span>
                    </p>
                    <Tooltip
                      key={index}
                      title="A pontuação mensal mínima para concorrer é 3000."
                    >
                      <div
                        style={{
                          backgroundColor:
                            item.monthlyScore >= 3000 ? "green" : "orange",
                          color: "white",
                          padding: "0.5rem",
                          textAlign: "center",
                          marginTop: "5px",
                          fontSize: "0.8rem",
                        }}
                      >
                        {item.monthlyScore >= 3000
                          ? "Running for prize!"
                          : "Not running for prize yet!"}
                      </div>
                    </Tooltip>
                  </div>
                </AnimatedLi>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
}
