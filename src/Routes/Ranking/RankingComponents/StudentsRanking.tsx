import React, { useEffect, useState } from "react";
import { AnimatedLi, DivFont, HOne } from "../../../Resources/Components/RouteBox";
import {
  ImgResponsive0,
  Xp,
  abreviateName,
  backDomain,
  formatNumber,
  updateScore,
} from "../../../Resources/UniversalComponents";
import { Button, CircularProgress } from "@mui/material";
import axios from "axios";
import { levels } from "./RankingLevelsList";
import {
  alwaysBlack,
  alwaysWhite,
  secondaryColor,
  textSecondaryColorContrast,
  textTitleFont,
  transparentBlack,
} from "../../../Styles/Styles";
import { listOfButtons } from "./ListOfCriteria";
import { MyHeadersType } from "../../../Resources/types.universalInterfaces";
import { ArvinButton } from "../../../Resources/Components/ItemsLibrary";
import { HThree } from "../../MyClasses/MyClasses.Styled";

interface StudentsRankingProps {
  headers: MyHeadersType | null;
  monthNow: string;
}

export default function StudentsRanking({
  headers,
  monthNow,
}: StudentsRankingProps) {
  interface StudentsType {
    id: string;
    lastname: string;
    name: string;
    picture: string;
    username: string;
    monthlyScore: number;
    totalScore: number;
  }

  interface UserType {
    id: string;
    name: string;
    lastname: string;
    ankiEmail: string;
    ankiPassword: string;
    dateOfBirth: string;
    doc: string;
    email: string;
    googleDriveLink: string;
    permissions: string;
    phoneNumber: string;
    picture: string;
    username: string;
    monthlyScore: number;
    totalScore: number;
  }

  const [students, setStudents] = useState<StudentsType[]>([]);
  const [user, setUser] = useState<UserType>({
    id: "",
    name: "",
    lastname: "",
    ankiEmail: "",
    ankiPassword: "",
    dateOfBirth: "",
    doc: "",
    email: "",
    googleDriveLink: "",
    permissions: "",
    phoneNumber: "",
    picture: "",
    username: "",
    monthlyScore: 0,
    totalScore: 0,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [isAdm, setIsAdm] = useState<boolean>(false);
  const [loadingScore, setLoadingScore] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [descSpecial, setDescSpecial] = useState<string>("");
  const [plusScore, setPlusScore] = useState<number>(0);
  const [totalScore, setTotalScore] = useState<number>(0);
  const [monthlyScore, setMonthlyScore] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [ID, setId] = useState<string>("");
  const [card, setCard] = useState<boolean>(false);
  const [pic, setPic] = useState<string>("");
  const [name, setName] = useState<string>("");

  const actualHeaders = headers || {};

  const seeEdition = async (id: string) => {
    setDisabled(true);
    setLoadingScore(true);
    setIsVisible(!isVisible);
    try {
      const response = await axios.get(`${backDomain}/api/v1/student/${id}`, {
        headers: actualHeaders,
      });
      setTotalScore(response.data.formattedStudentData.totalScore);
      setMonthlyScore(response.data.formattedStudentData.monthlyScore);
      setId(response.data.formattedStudentData.id);
      setPic(response.data.formattedStudentData.picture);
      setName(
        response.data.formattedStudentData.name +
          " " +
          abreviateName(response.data.formattedStudentData.lastname)
      );
      setDisabled(false);

      setLoadingScore(false);
    } catch (error) {
      console.log("error", error);
      console.error(error);
    }
  };

  const changePlusScore = (score: number) => {
    setPlusScore(score);
  };

  const updateScoreNow = async (id: string) => {
    try {
      const response = await axios.get(`${backDomain}/api/v1/student/${id}`, {
        headers: actualHeaders,
      });
      setTotalScore(response.data.formattedStudentData.totalScore);
      setMonthlyScore(response.data.formattedStudentData.monthlyScore);
    } catch (error: any) {
      console.log(error);
      console.error(error);
    }
  };

  const submitPlusScore = async (
    id: string,
    score: number,
    description: string,
    type: string
  ) => {
    setLoadingScore(true);
    setDisabled(true);
    try {
      const response = await axios.put(
        `${backDomain}/api/v1/score/${id}`,
        {
          score,
          description,
          type,
        },
        {
          headers: actualHeaders,
        }
      );

      updateScoreNow(id);
      setDisabled(false);
      setLoadingScore(false);
    } catch (error) {
      console.log("Erro ao somar pontuação");
      setDisabled(false);
    }
  };

  const theItems = levels();

  useEffect(() => {
    let getLoggedUser = JSON.parse(localStorage.getItem("loggedIn") || "");
    setUser(getLoggedUser);
    getLoggedUser.permissions === "superadmin" ? setIsAdm(true) : null;
  }, []);

  const handleSeeModal = () => {
    setIsVisible(!isVisible);
    fetchStudents();
  };

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${backDomain}/api/v1/scoresranking/`, {
        headers: actualHeaders,
      });
      setStudents(response.data.listOfStudents);
      setLoading(false);
    } catch (error) {
      console.log("Erro ao encontrar alunos");
    }
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundColor: transparentBlack(),
          width: "10000px",
          height: "10000px",
          top: "0",
          left: "0",
          position: "fixed",
          zIndex: 95,
          display: isVisible ? "block" : "none",
          padding: "1rem",
        }}
        onClick={() => handleSeeModal()}
      />
      <div
        style={{
          position: "fixed",
          zIndex: 100,
          padding: "1rem",
          backgroundColor: alwaysWhite(),
          top: "50%",
          left: "50%",
          width: "100vw",
          maxWidth: "40rem",
          maxHeight: "75vh",
          overflow: "auto",
          display: isVisible ? "block" : "none",
          transform: "translate(-50%, -50%)",
        }}
      >
        {loadingScore ? (
          <CircularProgress style={{ color: secondaryColor() }} />
        ) : (
          <div
            style={{
              display: "grid",
              gap: "0.5rem",
            }}
          >
            <Xp
              onClick={() => handleSeeModal()}
              style={{
                fontSize: "1.5rem",
              }}
            >
              x
            </Xp>
            <HThree>
              Monthly Score: <strong>{formatNumber(monthlyScore)} </strong>{" "}
            </HThree>
            <HThree>
              Total Score: <strong>{formatNumber(totalScore)} </strong>
            </HThree>
          </div>
        )}
        <div
          style={{
            display: "grid",
            gap: "1rem",
            overflow: "auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gap: "0.5rem",
            }}
          >
            {listOfButtons.map((item, index) => {
              return (
                <ArvinButton
                  key={index}
                  disabled={disabled}
                  style={{
                    color: alwaysWhite(),
                    fontSize: "0.8rem",
                  }}
                  color={item.color}
                  onClick={() =>
                    submitPlusScore(
                      ID,
                      item.score,
                      item.description,
                      item.category
                    )
                  }
                >
                  {item.text}
                </ArvinButton>
              );
            })}

            <div>
              <p>Personalizado</p>
              <input
                style={{ maxWidth: "5rem", marginRight: "5px" }}
                placeholder="Special Score"
                onChange={(e) => changePlusScore(Number(e.target.value))}
                type="number"
              />
              <input
                style={{ maxWidth: "5rem", marginRight: "5px" }}
                placeholder="Description"
                onChange={(e) => setDescSpecial(e.target.value)}
                type="text"
              />
              <ArvinButton
                onClick={() =>
                  submitPlusScore(ID, plusScore, descSpecial, "Others")
                }
              >
                +
              </ArvinButton>
            </div>
            <button
              onClick={() => {
                setCard(!card);
              }}
            >
              see card
            </button>
          </div>
          <div
            id="the-card"
            style={{ display: card ? "block" : "none", position: "relative" }}
          >
            <img
              style={{
                maxWidth: "30rem",
                position: "absolute",
                zIndex: 1,
              }}
              src={updateScore(totalScore).card}
              alt=""
            />
            <img
              style={{
                maxWidth: "16rem",
                width: "16rem",
                height: "16rem",
                objectFit: "cover",
                margin: "auto",
                borderRadius: "50%",
                position: "relative",
                zIndex: 2,
                left: "7em",
                top: "1em",
              }}
              src={pic}
              alt=""
            />
            <p
              style={{
                position: "relative",
                zIndex: 3,
                maxWidth: "16rem",
                width: "16rem",
                height: "16rem",
                objectFit: "cover",
                margin: "auto",
                borderRadius: "50%",
                left: name.length < 15 ? "5rem" : "3.4rem",
                top: "5rem",
                fontFamily: textTitleFont(),
                fontWeight: 800,
                fontSize: "1.4rem",
              }}
            >
              {name}
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "0.5rem",
        }}
      >
        <Button
          onClick={() => fetchStudents()}
          style={{
            backgroundColor: textSecondaryColorContrast(),
            color: secondaryColor(),
          }}
        >
          <i className="fa fa-refresh" aria-hidden="true"></i>
        </Button>
        <p>
          {`Apenas os primeiros 5 colocados em ${monthNow} são mostrados na
          lista!`}
        </p>
      </div>
      {loading ? (
        <CircularProgress style={{ color: secondaryColor() }} />
      ) : (
        <div>
          {students.map((item: any, index: number) => {
            const levelNumber = updateScore(item.totalScore).level;
            return (
              <>
                <div
                  key={index}
                  style={{
                    padding: "0.5rem 1rem",
                    margin: "1rem 0",
                    boxShadow: "1px 1px 10px 1px #aaa",
                    display: item.id === user.id ? "flex" : "none",
                    justifyContent: "space-between",
                    background: theItems[levelNumber].color,
                    color: theItems[levelNumber].textcolor,
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <HOne
                      style={{
                        fontWeight: 600,
                        margin: 0,
                        padding: "5px",
                        background: theItems[levelNumber].color,
                        color: theItems[levelNumber].textcolor,
                      }}
                    >
                      #{index + 1} | {item.name} {abreviateName(item.lastname)}
                    </HOne>
                  </div>
                  <div>
                    <p>
                      Monthly Score:{" "}
                      <span
                        style={{
                          fontWeight: "600",
                        }}
                      >
                        {formatNumber(item.monthlyScore)}
                      </span>
                    </p>
                    <p>
                      Total Score:{" "}
                      <span
                        style={{
                          fontWeight: "600",
                        }}
                      >
                        {formatNumber(item.totalScore)}
                      </span>
                    </p>
                  </div>
                </div>
              </>
            );
          })}

          <ul>
            {students.map((item: any, index: number) => {
              const levelNumber = updateScore(item.totalScore).level;
              return (
                <>
                  <AnimatedLi
                    key={index + item.picture}
                    style={{
                      display: isAdm
                        ? "flex"
                        : index < 5 && item.monthlyScore > 0
                        ? "flex"
                        : "none",
                      background: theItems[levelNumber].color,
                      overflowX: "hidden",
                      borderRadius: "5rem",
                      boxShadow: "1px 1px 10px 1px #aaa",
                      color: theItems[levelNumber].textcolor,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <ImgResponsive0
                        src={theItems[levelNumber].image2}
                        alt="level"
                      />
                      <img
                        style={{
                          width: "4.5rem",
                          height: "4.5rem",
                          objectFit: "cover",
                          margin: "auto",
                          borderRadius: "50%",
                          border: `solid ${alwaysWhite()} 3px`,
                        }}
                        src={item.picture}
                      />
                    </div>
                    <div
                      style={{
                        display: "grid",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          fontFamily: textTitleFont(),
                          padding: "5px",
                          background: theItems[levelNumber].color,
                          color: theItems[levelNumber].textcolor,
                        }}
                      >
                        #{index + 1} | {item.name}{" "}
                        {abreviateName(item.lastname)}{" "}
                      </p>
                      <div
                        style={{
                          fontSize: "0.9rem",
                          borderRadius: "0.5rem",
                          marginBottom: "0.2rem",
                          padding: "5px",
                        }}
                      >
                        <p
                          style={{
                            textAlign: "center",
                          }}
                        >
                          Monthly Score:
                        </p>
                        <DivFont
                          style={{
                            textAlign: "center",

                            color: alwaysWhite(),
                            textShadow: `2px 0 ${alwaysBlack()},
                             -2px 0 ${alwaysBlack()}, 
                             0 2px ${alwaysBlack()},
                              0 -2px ${alwaysBlack()},
                               1px 1px ${alwaysBlack()},
                                -1px -1px ${alwaysBlack()},
                                 1px -1px ${alwaysBlack()},
                                  -1px 1px ${alwaysBlack()}`,
                          }}
                        >
                          {formatNumber(item.monthlyScore)}{" "}
                        </DivFont>
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: "1rem",
                        display: isAdm ? "grid" : "none",
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        color: theItems[levelNumber].textcolor,
                      }}
                    >
                      <ArvinButton
                        onClick={() => seeEdition(item.id)}
                        color="white"
                      >
                        +
                      </ArvinButton>
                      <p
                        style={{
                          fontFamily: textTitleFont(),
                          fontWeight: "600",
                          fontSize: "0.8rem",
                        }}
                      >
                        {formatNumber(item.totalScore)}
                      </p>
                    </div>
                  </AnimatedLi>
                </>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
