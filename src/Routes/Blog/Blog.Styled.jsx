import { styled } from "styled-components";
import {
  lightGreyColor,
  textPrimaryColorContrast,
  textSecondaryColorContrast,
} from "../../Styles/Styles";

export const EventsCardsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const EventsCard = styled.div`
  display: grid;
  gap: 0.5rem;
  max-width: 25rem;
  justify-content: center;
  text-align: center;
  padding: 0.5rem;
  background-color: ${lightGreyColor()};
`;

export const TitleChangeSize = styled.span`
  font-size: 1rem;
  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
`;

export const SpanDisapear = styled.span`
  background-color: ${textPrimaryColorContrast()};
  color: ${textSecondaryColorContrast()};
  padding: 3px;
  font-size: 1rem;
  padding: "0.2rem 0.6rem";
  @media (max-width: 900px) {
    display: none;
  }
`;
