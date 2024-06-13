import React, { useEffect, useState } from "react";
import axios from "axios";
import { backDomain } from "../../../Resources/UniversalComponents";
import { ArvinButton } from "../../../Resources/Components/ItemsLibrary";
import { MyHeadersType } from "../../../Resources/types.universalInterfaces";
import AddOneFlashCard from "./AddFlashONEFlashCard";

interface Student {
  id: string;
  name: string;
  lastname: string;
}

interface FlashCard {
  frontCard: string;
  backCard: string;
  languageFront: string;
  languageBack: string;
}

interface AddFlashCardsProps {
  headers: MyHeadersType | null;
  display: string | null;
}
const AddFlashCards = ({ headers, display }: AddFlashCardsProps) => {
  const [studentsList, setStudentsList] = useState<Student[]>([]);
  const [myId, setId] = useState<string>("");
  const [studentID, setStudentID] = useState<string>("");
  const [addCardVisible, setAddCardVisible] = useState<boolean>(false);
  const [cards, setCards] = useState<FlashCard[]>([]);

  useEffect(() => {
    const user = localStorage.getItem("loggedIn");
    if (user) {
      const { id } = JSON.parse(user);
      setId(id);
      setStudentID(id);
    }
  }, []);

  const actualHeaders = headers || {};

  const fetchStudents = async () => {
    setAddCardVisible(!addCardVisible);
    if (myId === "651311fac3d58753aa9281c5") {
      try {
        const response = await axios.get(`${backDomain}/api/v1/students/`, {
          headers: actualHeaders,
        });
        setStudentsList(response.data.listOfStudents);
      } catch (error) {
        alert("Erro ao encontrar alunos");
      }
    }
  };

  const handleStudentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStudentID(event.target.value);
  };

  const addNewCard = () => {
    console.log(cards);
    setCards([
      ...cards,
      { frontCard: "", backCard: "", languageFront: "en", languageBack: "pt" },
    ]);
  };

  const handleFrontCardChange = (index: number, value: string) => {
    const newCards = [...cards];
    newCards[index].frontCard = value;
    setCards(newCards);
  };

  const handleBackCardChange = (index: number, value: string) => {
    const newCards = [...cards];
    newCards[index].backCard = value;
    setCards(newCards);
  };

  const handleLanguageFrontChange = (index: number, value: string) => {
    const newCards = [...cards];
    newCards[index].languageFront = value;
    setCards(newCards);
  };

  const handleLanguageBackChange = (index: number, value: string) => {
    const newCards = [...cards];
    newCards[index].languageBack = value;
    setCards(newCards);
  };

  const addNewCards = async () => {
    const newCards = cards.map((card) => ({
      front: {
        text: card.frontCard,
        language: card.languageFront,
      },
      back: {
        text: card.backCard,
        language: card.languageBack,
      },
    }));
    console.log(newCards);
    try {
      await axios.post(
        `${backDomain}/api/v1/flashcard/${studentID}`,
        { newCards },
        { headers: actualHeaders }
      );
      setCards([]);
    } catch (error) {
      alert("Erro ao enviar cards");
    }
  };

  return (
    <div
      style={{
        //@ts-ignore
        position: display,
        border: display  == "fixed" ? "1px solid black" : "none",
        borderRadius: "1rem",
        zIndex: 10000,
        bottom: 10,
        right: 10,
        backgroundColor: "white",
        margin: "auto",
        padding: "1rem",
        maxWidth: display ? "fit-content" : "10px",
      }}
      className="smooth"
    >
      <section
        style={{ margin: "auto", maxWidth: "fit-content", display: "flex" }}
        id="addcards"
      >
        {myId === "651311fac3d58753aa9281c5" && (
          <div style={{ display: "grid" }}>
            <ArvinButton
              style={{
                margin: " auto",
                display: "block",
              }}
              color="yellow"
              onClick={fetchStudents}
            >
              Adicionar cartas
            </ArvinButton>
            <div
              style={{
                marginTop: "1rem",
                display: addCardVisible ? "block" : "none",
              }}
            >
              <div style={{ display: "flex" }}>
                <select
                  style={{ maxWidth: "120px" }}
                  onChange={handleStudentChange}
                  value={studentID}
                >
                  {studentsList.map((student, index) => (
                    <option key={index} value={student.id}>
                      {student.name + " " + student.lastname}
                    </option>
                  ))}
                </select>
                <ArvinButton color="navy" onClick={addNewCard}>
                  +
                </ArvinButton>
              </div>
              <div>
                {cards.map((card, index) => (
                  <AddOneFlashCard
                    key={index}
                    index={index}
                    frontCard={card.frontCard}
                    backCard={card.backCard}
                    languageFront={card.languageFront}
                    languageBack={card.languageBack}
                    handleFrontCardChange={handleFrontCardChange}
                    handleBackCardChange={handleBackCardChange}
                    handleLanguageFrontChange={handleLanguageFrontChange}
                    handleLanguageBackChange={handleLanguageBackChange}
                  />
                ))}
              </div>
              <ArvinButton color="green" onClick={addNewCards}>
                Add cards
              </ArvinButton>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default AddFlashCards;
