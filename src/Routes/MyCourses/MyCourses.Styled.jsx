import { styled } from "styled-components";
import {
  alwaysBlack,
  alwaysWhite,
  lightGreyColor,
  primaryColor,
  secondaryColor,
  textPrimaryColorContrast,
  textSecondaryColorContrast,
} from "../../Styles/Styles";

export const CoursesList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const CourseItem = styled.div`
  background-color: ${secondaryColor()};
  padding: 3rem;
  text-align: center;
  border: none;
  color: ${textSecondaryColorContrast()};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: ${textSecondaryColorContrast()};
    color: ${secondaryColor()};
    font-weight: 700;
  }
`;
export const CourseCard = styled.div`
  color: ${lightGreyColor()};
  text-align: center;
  display: flex;
  height: 20rem;
  width: 15rem;
  padding: 1rem 0.2rem;
  flex-direction: column;
  border-radius: 0.5rem;
  transition: 0.1s;
  img {
    filter: grayscale(100%);
    transition: filter 0.1s;
  }
  &:hover {
    border-radius: 0;
    box-shadow: 1px 1px 10px 1px #aaa;
    img {
      filter: grayscale(0%);
    }
    &:active {
      box-shadow: inset 1px 1px 10px 1px #aaa;
    }
  }
`;
