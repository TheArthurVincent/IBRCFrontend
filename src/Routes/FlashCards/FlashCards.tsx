import React, { useEffect, useState } from "react";
import {
  HOne,
  RouteDiv,
  RouteSizeControlBox,
} from "../../Resources/Components/RouteBox";
import Helmets from "../../Resources/Helmets";
import { HeadersProps } from "../../Resources/types.universalInterfaces";
import { readText } from "../EnglishLessons/Assets/Functions/FunctionLessons";
import { ArvinButton } from "../../Resources/Components/ItemsLibrary";
import { backDomain, formatDateBr } from "../../Resources/UniversalComponents";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { darkGreyColor, lightGreyColor } from "../../Styles/Styles";

const FlashCards = ({ headers }: HeadersProps) => {
  const [studentsList, setStudentsList] = useState<any[]>([]);
  const [myId, setId] = useState<string>("");
  const [studentID, setStudentID] = useState<string>("");
  const [frontCard, setFrontCard] = useState<string>("");
  const [backCard, setBackCard] = useState<string>("");
  const [languageFront, setLanguageFront] = useState<string>("en");
  const [languageBack, setLanguageBack] = useState<string>("pt");
  const [cards, setCards] = useState<any[]>([]);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [answer, setAnswer] = useState<boolean>(false);
  const [seeAddCards, setSeeAddCards] = useState<boolean>(false);
  const [cardsLength, setCardsLength] = useState<boolean>(true);
  const [cardsCount, setCardsCount] = useState<any>([]);
  const [see, setSee] = useState<boolean>(false);
  const [count, setCount] = useState<number>(4);
  const timerDisabled = () => {
    setCount(4);
    setIsDisabled(true);
    setTimeout(() => {
      setCount(3);
    }, 1000);
    setTimeout(() => {
      setCount(2);
    }, 2000);
    setTimeout(() => {
      setCount(1);
    }, 3000);
    setTimeout(() => {
      setIsDisabled(false);
    }, 4000);
  };
  const fetchStudents = async () => {
    setSeeAddCards(!seeAddCards);
    if (myId === "651311fac3d58753aa9281c5") {
      try {
        const response = await axios.get(`${backDomain}/api/v1/students/`, {
          headers: actualHeaders,
        });
        setStudentsList(response.data.listOfStudents);

        setAnswer(false);
      } catch (error) {
        alert("Erro ao encontrar alunos");
      }
    }
  };
  useEffect(() => {
    const user = localStorage.getItem("loggedIn");
    if (user) {
      const { id } = JSON.parse(user);
      setId(id);
    }
    setAnswer(false);
  }, []);

  const actualHeaders = headers || {};

  const handleStudentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    setStudentID(selectedId);
    console.log(selectedId);
  };

  const addNewCard = async () => {
    const newCards = [
      {
        front: { text: frontCard, language: languageFront },
        back: { text: backCard, language: languageBack },
      },
    ];
    try {
      const response = await axios.post(
        `${backDomain}/api/v1/flashcard/${studentID}`,
        { newCards },
        { headers: actualHeaders }
      );
      setFrontCard("");
      setBackCard("");
      setLanguageFront("en");
      setLanguageBack("pt");
      setAnswer(false);

      seeCardsToReview();
    } catch (error) {
      alert("Erro ao enviar cards");
    }
  };

  const languages = ["en", "pt", "it", "fr", "de"];
  const reviewCard = async (id: string, difficulty: string) => {
    try {
      const response = await axios.put(
        `${backDomain}/api/v1/reviewflashcard/${myId}`,
        { flashcardId: id, difficulty },
        { headers: actualHeaders }
      );

      setAnswer(false);
      seeCardsToReview();
    } catch (error) {
      alert("Erro ao enviar cards");
    }
  };
  const [loading, setLoading] = useState<boolean>(false);

  const seeCardsToReview = async () => {
    setSee(true);
    timerDisabled();
    setLoading(true);
    try {
      const response = await axios.get(
        `${backDomain}/api/v1/flashcards/${myId}`,
        { headers: actualHeaders }
      );
      const thereAreCards =
        response.data.dueFlashcards.length > 0 ? false : true;
      const cardsCountFetch = response.data.cardsCount;
      {
        response.data.dueFlashcards.length > 0 &&
        response.data.dueFlashcards[0].front
          ? readText(
              response.data.dueFlashcards[0].front.text,
              false,
              response.data.dueFlashcards[0].front.language
            )
          : null;
      }
      console.log(thereAreCards);
      console.log(response.data.dueFlashcards);
      setCards(response.data.dueFlashcards);
      setCardsCount(cardsCountFetch);
      setCardsLength(thereAreCards);
      setLoading(false);
    } catch (error) {
      alert("Erro ao enviar cards");
    }
  };

  return (
    <RouteSizeControlBox className="smooth">
      <RouteDiv>
        <Helmets text="Flashcards" />
        <HOne>Flash Cards</HOne>
        <div
          style={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <ArvinButton onClick={seeCardsToReview}>Iniciar revisões</ArvinButton>
          {myId === "651311fac3d58753aa9281c5" && (
            <ArvinButton color="yellow" onClick={fetchStudents}>
              Adicionar cartas
            </ArvinButton>
          )}
        </div>
        {myId === "651311fac3d58753aa9281c5" && seeAddCards && (
          <div style={{ display: "grid" }}>
            <select
              onChange={handleStudentChange}
              name="students"
              id=""
              value={studentID}
            >
              {studentsList.map((student, index) => (
                <option key={index} value={student.id}>
                  {student.name + " " + student.lastname}
                </option>
              ))}
            </select>
            <div>
              {" "}
              <input
                value={frontCard}
                onChange={(e) => setFrontCard(e.target.value)}
                type="text"
              />
              <select
                value={languageFront}
                onChange={(e) => setLanguageFront(e.target.value)}
              >
                {languages.map((language, index) => {
                  return (
                    <option key={index} value={language}>
                      {language}
                    </option>
                  );
                })}
              </select>{" "}
            </div>
            <div>
              {" "}
              <input
                value={backCard}
                onChange={(e) => setBackCard(e.target.value)}
                type="text"
              />
              <select
                value={languageBack}
                onChange={(e) => setLanguageBack(e.target.value)}
              >
                {languages.map((language, index) => {
                  return (
                    <option key={index} value={language}>
                      {language}
                    </option>
                  );
                })}
              </select>
            </div>
            <ArvinButton color="green" onClick={addNewCard}>
              Add card
            </ArvinButton>
          </div>
        )}
        {see && (
          <div>
            {loading ? (
              <CircularProgress />
            ) : (
              <div
                style={{
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                <div style={{ padding: "1rem" }}>
                  {!cardsLength ? (
                    <>
                      <div
                        style={{
                          fontSize: "12px",
                          paddingBottom: "1rem",
                        }}
                      >
                        New cards:{" "}
                        <span
                          style={{
                            color: "navy",
                          }}
                        >
                          {cardsCount.newCardsCount}
                        </span>{" "}
                        | Old cards:{" "}
                        <span
                          style={{
                            color: "green",
                          }}
                        >
                          {cardsCount.reviewedCardsCount}
                        </span>{" "}
                        | Total:{" "}
                        <span
                          style={{
                            color: "black",
                          }}
                        >
                          {cards.length}
                        </span>{" "}
                        |{" "}
                      </div>{" "}
                      <div
                        style={{
                          borderBottom: "1px solid #ccc",
                          paddingBottom: "1rem",
                        }}
                      >
                        {cards[0]?.front?.text || ""}
                        <button
                          className="audio-button"
                          onClick={() =>
                            readText(
                              cards[0].front.text,
                              true,
                              cards[0].front.language
                            )
                          }
                        >
                          <i className="fa fa-volume-up" aria-hidden="true" />
                        </button>
                        <br />
                        {!isDisabled ? (
                          <ArvinButton
                            style={{
                              marginTop: "2rem",
                            }}
                            disabled={isDisabled}
                            cursor={isDisabled ? "not-allowed" : "pointer"}
                            color={isDisabled ? "grey" : "navy"}
                            onClick={() => {
                              setAnswer(true);
                              {
                                cards.length > 0 &&
                                cards[0].back.language == "en"
                                  ? readText(cards[0].back.text, true)
                                  : null;
                              }
                            }}
                          >
                            Answer
                          </ArvinButton>
                        ) : (
                          <p
                            style={{
                              color: darkGreyColor(),
                              paddingTop: "1rem",
                            }}
                          >
                            {count}
                          </p>
                        )}{" "}
                      </div>
                      {answer && (
                        <div style={{ padding: "1rem" }}>
                          {cards[0]?.back?.text || ""}
                          <button
                            className="audio-button"
                            onClick={() =>
                              readText(
                                cards[0].back.text,
                                true,
                                cards[0].back.language
                              )
                            }
                          >
                            <i className="fa fa-volume-up" aria-hidden="true" />
                          </button>
                          <div
                            style={{
                              justifyContent: "center",
                              display: "flex",
                              gap: "5px",
                              marginTop: "2rem",
                            }}
                          >
                            <div style={{ display: "grid", gap: "5px" }}>
                              <ArvinButton
                                onClick={() =>
                                  reviewCard(cards[0].id, "veryhard")
                                }
                                color="red"
                              >
                                Very hard!
                              </ArvinButton>
                              <p style={{ fontSize: "10px" }}>Today</p>
                            </div>
                            <div style={{ display: "grid", gap: "5px" }}>
                              <ArvinButton
                                onClick={() => reviewCard(cards[0].id, "hard")}
                                color="pink"
                              >
                                Hard
                              </ArvinButton>
                              <p style={{ fontSize: "10px" }}>
                                {formatDateBr(cards[0].hard)}
                              </p>
                            </div>

                            <div style={{ display: "grid", gap: "5px" }}>
                              <ArvinButton
                                onClick={() =>
                                  reviewCard(cards[0].id, "medium")
                                }
                                color="navy"
                              >
                                Medium
                              </ArvinButton>
                              <p style={{ fontSize: "10px" }}>
                                {formatDateBr(cards[0].medium)}
                              </p>
                            </div>

                            <div style={{ display: "grid", gap: "5px" }}>
                              <ArvinButton
                                onClick={() => reviewCard(cards[0].id, "easy")}
                                color="green"
                              >
                                Easy
                              </ArvinButton>
                              <p style={{ fontSize: "10px" }}>
                                {formatDateBr(cards[0].easy)}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <p>
                      <b>
                        {" "}
                        Congratulations! You've finished reviewing your cards!
                        One step closer to fluency!
                      </b>{" "}
                      <br />
                      <br />
                      Parabéns, você terminou de revisar seus cards! Mais um
                      passo rumo à fluência!
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </RouteDiv>
    </RouteSizeControlBox>
  );
};

export default FlashCards;
