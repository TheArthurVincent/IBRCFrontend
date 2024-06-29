import React, { useState, useEffect } from "react";
import {
  formatDate,
} from "../../../Resources/UniversalComponents";
import {
  secondaryColor,
  textSecondaryColorContrast,
} from "../../../Styles/Styles";

const Countdown: React.FC = () => {
  const targetDate = new Date("2024-06-29T18:00:00"); // Data limite fixa
  // const targetDate = new Date("2024-07-31T18:00:00"); // Data limite fixa

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "2rem",
      }}
    >
      <h1>Score Resets on {formatDate(targetDate)}</h1>
      <div
        style={{
          backgroundColor: timeLeft.days == 0 ? "red" : secondaryColor(),
          color: textSecondaryColorContrast(),
          borderRadius: "1rem",
          fontSize: "1.1rem",
          padding: "8px 12px",
          fontFamily: "Athiti",
          fontWeight: 600,
          display: "inline",
        }}
      >
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
        {timeLeft.seconds}s
      </div>
    </div>
  );
};

export default Countdown;
