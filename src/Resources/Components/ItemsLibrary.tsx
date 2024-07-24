import styled from "styled-components";
import {
  alwaysWhite,
  primaryColor,
  primaryColor2,
  secondaryColor,
  secondaryColor2,
  textTitleFont,
} from "../../Styles/Styles";

interface ButtonProps {
  firstcolor?: string;
  secondcolor?: string;
  textcolor?: string;
}

interface ArvinButtonProps {
  color?: string;
  cursor?: string;
}

export const ArvinButton = styled.button<ArvinButtonProps>`
  min-width: 30px;
  margin: 0 3px;
  background: linear-gradient(
    to left,
    ${(props) =>
        props.color === "red"
          ? "red"
          : props.color === "green"
          ? secondaryColor()
          : props.color === "blue"
          ? "blue"
          : props.color === "orange"
          ? "orange"
          : props.color === "purple"
          ? "purple"
          : props.color === "yellow"
          ? "#FFD700"
          : props.color === "pink"
          ? "#FF69B4"
          : props.color === "grey"
          ? "#eee"
          : props.color === "white"
          ? "white"
          : primaryColor()}
      0%,
    ${(props) =>
        props.color === "red"
          ? "#fa7a71"
          : props.color === "green"
          ? secondaryColor2()
          : props.color === "blue"
          ? "navy"
          : props.color === "orange"
          ? "#FFA500"
          : props.color === "white"
          ? "#eee"
          : props.color === "purple"
          ? "#DDA0DD"
          : props.color === "grey"
          ? "#aaa"
          : props.color === "yellow"
          ? "#B8860B" // Yellow darker gradient
          : props.color === "pink"
          ? "#C71585" // Pink darker gradient
          : primaryColor2()}
      50%
  );
  color: ${(props) => (props.color === "white" ? "black" : alwaysWhite())};
  padding: 3px 1rem;
  font-family: ${textTitleFont()};
  border-radius: 8px;
  border: none;
  cursor: ${(props) =>
    props.cursor === "not-allowed" ? "not-allowed" : "pointer"};
  display: inline;
  max-width: fit-content;
  font-weight: 600;

  &:hover {
    background: linear-gradient(
      to left,
      ${(props) =>
          props.color === "red"
            ? "red"
            : props.color === "green"
            ? secondaryColor()
            : props.color === "blue"
            ? "blue"
            : props.color === "white"
            ? "white"
            : props.color === "orange"
            ? "orange"
            : props.color === "purple"
            ? "purple"
            : props.color === "grey"
            ? "grey"
            : props.color === "yellow"
            ? "#FFD700" // Yellow darker shade
            : props.color === "pink"
            ? "#FF69B4" // Pink darker shade
            : primaryColor()}
        0%,
      ${(props) =>
          props.color === "red"
            ? "#FA7A71"
            : props.color === "white"
            ? "grey"
            : props.color === "green"
            ? secondaryColor2()
            : props.color === "blue"
            ? "#87CEFA"
            : props.color === "orange"
            ? "#FFA500"
            : props.color === "purple"
            ? "#DDA0DD"
            : props.color === "grey"
            ? "grey"
            : props.color === "yellow"
            ? "#B8860B" // Yellow darker gradient
            : props.color === "pink"
            ? "#C71585" // Pink darker gradient
            : primaryColor2()}
        100%
    );
    box-shadow: 1px 1px 10px 1px #bbb;
    border-radius: 10px;
  }

  &:active {
    font-weight: 500;
    box-shadow: inset 1px 1px 10px 1px #ddd;
  }
`;

export const MyButton = styled.button<ButtonProps>`
  background: linear-gradient(
    to left,
    ${(props) => props.firstcolor || primaryColor()} 0%,
    ${(props) => props.secondcolor || props.firstcolor || primaryColor2()} 50%
  );
  color: ${(props) => props.textcolor || alwaysWhite()};
  padding: 5px 1.2rem;
  font-family: ${textTitleFont()};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  display: inline;
  max-width: fit-content;
  font-weight: 600;
  &:hover {
    background: linear-gradient(
      to left,
      ${(props) => props.firstcolor || primaryColor()} 0%,
      ${(props) => props.secondcolor || props.firstcolor || primaryColor2()}
        100%
    );

    box-shadow: 1px 1px 10px 1px #bbb;
    border-radius: 12px;
  }

  &:active {
    font-weight: 500;
    box-shadow: inset 1px 1px 10px 1px #ddd;
  }
`;
