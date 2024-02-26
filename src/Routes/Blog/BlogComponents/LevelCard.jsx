import React, { useState } from "react";
import theitems from "../../Ranking/RankingComponents/ranking.json";
import { backDomain } from "../../../Resources/UniversalComponents";
import { useEffect } from "react";
import axios from "axios";
import { NewLevelCardComponent } from "../../../Resources/Components/RouteBox";
import blue from "../../../../public/assets/blue.png";
import black from "../../../../public/assets/black.png";
import orange from "../../../../public/assets/orange.png";
import white from "../../../../public/assets/white.png";
import purple from "../../../../public/assets/purple.png";
import red from "../../../../public/assets/red.png";
import green from "../../../../public/assets/green.png";
import yellow from "../../../../public/assets/yellow.png";
import supreme from "../../../../public/assets/supreme.png";
import { secondaryColor } from "../../../Styles/Styles";
import ranking from "../../Ranking/RankingComponents/ranking.json";
export function LevelCard({ headers, _StudentId, picture }) {
  const items = theitems.items;
  const [totalScore, setTotalScore] = useState(0);
  const [monthlyScore, setMonthlyScore] = useState(0);
  const [level, setLevel] = useState(9);

  useEffect(() => {
    console.log(ranking);
  }, []);

  const seeScore = async (id) => {
    try {
      const response = await axios.get(`${backDomain}/api/v1/score/${id}`, {
        headers,
      });

      let level = 0;
      for (let i = 0; i < items.length; i++) {
        if (response.data.totalScore >= items[i].totalScore) {
          level = items[i].level;
        } else {
          break;
        }
      }
      setTotalScore(response.data.totalScore);
      setMonthlyScore(response.data.monthlyScore);
      setLevel(level);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  useEffect(() => {
    let getLoggedUser = JSON.parse(localStorage.getItem("loggedIn"));
    setTimeout(() => {
      seeScore(getLoggedUser.id);
    }, 300);
  }, []);

  return (
    <NewLevelCardComponent
      style={{
        border: `groove 3px ${
          totalScore >= 10000 && totalScore < 20000
            ? "#F5BD33"
            : totalScore >= 20000 && totalScore < 35000
            ? "#0C55A5"
            : totalScore >= 35000 && totalScore < 50000
            ? "#B7050B"
            : totalScore >= 50000 && totalScore < 65000
            ? "#ADB762"
            : totalScore >= 65000 && totalScore < 80000
            ? "#FB6E02"
            : totalScore >= 80000 && totalScore < 100000
            ? "#703A74"
            : totalScore >= 100000 && totalScore < 2000000
            ? "#000"
            : totalScore >= 2000000
            ? secondaryColor()
            : "white"
        } `,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "7rem",
          height: "7rem",
          margin: "auto",
        }}
      >
        <img
          style={{
            width: "12rem",
            height: "12rem",
            objectFit: "cover",
            top: "50%",
            position: "absolute",
            left: "50%",
            zIndex: 3,
            transform: "translate(-50%, -40%)",
          }}
          src={
            totalScore >= 10000 && totalScore < 20000
              ? yellow
              : totalScore >= 20000 && totalScore < 35000
              ? blue
              : totalScore >= 35000 && totalScore < 50000
              ? red
              : totalScore >= 50000 && totalScore < 65000
              ? green
              : totalScore >= 65000 && totalScore < 80000
              ? orange
              : totalScore >= 80000 && totalScore < 100000
              ? purple
              : totalScore >= 100000 && totalScore < 2000000
              ? black
              : totalScore >= 2000000
              ? supreme
              : white
          }
          alt="Yellow Image"
        />
        <img
          style={{
            width: "7rem",
            height: "7rem",
            borderRadius: "50%",
            objectFit: "cover",
            position: "absolute",
            top: "17%",
            left: "0%",
          }}
          src={picture}
          alt="Profile Picture"
        />
      </div>
      <div
        style={{
          top: "30%",
          left: "0%",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "grid",
            alignItems: "center",
          }}
        >
          <i
            style={{
              fontSize: "1.8rem",
              marginBottom: "5px",
            }}
            className={items[level - 1].icon}
            aria-hidden="true"
          />
          <div
            style={{
              marginBottom: "1rem",
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              marginTop: "0.5rem",
            }}
          >
            <i
              onClick={() => seeScore(_StudentId)}
              style={{
                cursor: "pointer",
                color: "#fff",
                fontSize: "0.8rem",
                margin: "0",
              }}
              className="fa fa-refresh"
              aria-hidden="true"
            />
            <div>
              <p>Total Score: {totalScore}</p>
              <p>Monthly Score: {monthlyScore}</p>
            </div>
          </div>
        </div>
      </div>
    </NewLevelCardComponent>
  );
}

export default LevelCard;
