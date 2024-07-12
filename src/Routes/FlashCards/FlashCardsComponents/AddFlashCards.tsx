import React, { useEffect, useState } from "react";
import axios from "axios";
import { backDomain } from "../../../Resources/UniversalComponents";
import { ArvinButton } from "../../../Resources/Components/ItemsLibrary";
import { MyHeadersType } from "../../../Resources/types.universalInterfaces";
import AddOneFlashCard from "./AddFlashONEFlashCard";
import { Box, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

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
  backComments: string;
}

interface AddFlashCardsProps {
  headers: MyHeadersType | null;
  display: string | null;
}
const AddFlashCards = ({ headers, display }: AddFlashCardsProps) => {
  const [studentsList, setStudentsList] = useState<Student[]>([]);
  const [studentID, setStudentID] = useState<string>("");
  const [addCardVisible, setAddCardVisible] = useState<boolean>(false);
  const [cards, setCards] = useState<FlashCard[]>([]);
  const [myPermissions, setPermissions] = useState<string>("");

  useEffect(() => {
    const user = localStorage.getItem("loggedIn");
    if (user) {
      const { permissions, id } = JSON.parse(user);
      setStudentID(id);
      setPermissions(permissions);
    }
  }, []);

  const actualHeaders = headers || {};

  const fetchStudents = async () => {
    setAddCardVisible(!addCardVisible);
    if (myPermissions === "superadmin") {
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
    setCards([
      ...cards,
      {
        frontCard: "",
        backCard: "",
        languageFront: "en",
        languageBack: "pt",
        backComments: "",
      },
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

  const handleCommentsBack = (index: number, value: string) => {
    const newCards = [...cards];
    newCards[index].backComments = value;
    setCards(newCards);
  };

  const addNewCards = async () => {
    const newCards = cards.map((card) => ({
      backComments: card.backComments,
      front: {
        text: card.frontCard,
        language: card.languageFront,
      },
      back: {
        text: card.backCard,
        language: card.languageBack,
      },
    }));
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
    <Box
      sx={{
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
      <Box sx={{ margin: "auto", display: "flex" }} id="addcards">
        {myPermissions === "superadmin" && (
          <Box sx={{ display: "grid" }}>
            <ArvinButton
              // sx={{
              //   margin: " auto",
              //   display: "block",
              // }}
              color="yellow"
              onClick={fetchStudents}
            >
              Adicionar cartas
            </ArvinButton>
            <Box
              sx={{
                marginTop: "1rem",
                display: addCardVisible ? "block" : "none",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <FormControl sx={{ width: "250px" }}>
                  <InputLabel id="student-select-label">Choose student</InputLabel>
                  <Select
                    labelId="student-select-label"
                    value={studentID}
                    // @ts-ignore
                    onChange={handleStudentChange}
                    label="Choose student"
                  >
                    <MenuItem value="student" disabled hidden>
                      Choose student
                    </MenuItem>
                    {studentsList.map((student, index) => (
                      <MenuItem key={index} value={student.id}>
                        {student.name + " " + student.lastname}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <ArvinButton color="navy" onClick={addNewCard}>
                  +
                </ArvinButton>
              </Box>
              <Box>
                {cards.map((card, index) => (
                  <AddOneFlashCard
                    key={index}
                    index={index}
                    frontCard={card.frontCard}
                    backCard={card.backCard}
                    backComments={card.backComments}
                    languageFront={card.languageFront}
                    languageBack={card.languageBack}
                    handleFrontCardChange={handleFrontCardChange}
                    handleBackCardChange={handleBackCardChange}
                    handleLanguageFrontChange={handleLanguageFrontChange}
                    handleLanguageBackChange={handleLanguageBackChange}
                    handleCommentsBack={handleCommentsBack}
                  />
                ))}
              </Box>
              <ArvinButton color="green" onClick={addNewCards}>
                Add cards
              </ArvinButton>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AddFlashCards;
