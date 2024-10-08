import { styled } from "styled-components";
import { alwaysBlack, alwaysWhite } from "../../../../Styles/Styles";

export const ImgLesson = styled.img`
  width: 100%;
  max-width: 15rem;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
  margin: auto;
  object-position: center;
  border-radius: 10px;
  box-shadow: 1px 1px 12px 3px #bbb;
  @media (max-width: 500px) {
    max-width: 15rem;
  }
  @media print {
    box-shadow: 1px 1px 12px 3px white;
  }
`;

export const LiSentence = styled.li`
  list-style: none;
  margin-bottom: 10px;
  padding: 10px;
  border: solid 1px #ddd;
  border-radius: 10px;
  @media print {
    box-shadow: 1px 1px 12px 3px white;
  }
`;

export const RouteDivNotes = styled.div`
  background-color: ${alwaysWhite()};
  border-radius: 0.5rem;
  color: ${alwaysBlack()};
  padding: 0.5rem;
  position: sticky;
  top: 50px;
  left: 0;
  box-shadow: 1px 1px 5px 1px #777;
  background-color: white;
  transition: right 0.3s ease;
  margin: 5px;
  margin-top: 15px;

  @media (max-width: 800px) {
    margin: 0;
  }
`;

export const UlSentences = styled.ul`
  padding: 0.5rem;
  display: grid;
  gap: 0.8rem;

  @media (max-width: 1500px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const LiGridImageLessons = styled.li`
  display: grid;
  list-style: none;
  margin-bottom: 10px;
`;
export const UlGridImageLessons = styled.ul`
  padding: 1rem;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  @media (max-width: 690px) {
    grid-template-columns: 1fr;
  }
`;
export const LessonSizeControlBox = styled.div`
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  max-width: 90vw;
  justify-content: center;

  gap: 5px;
  margin-bottom: 9rem;
  &.smooth {
    animation-name: slideInLeft;
    animation-duration: 0.3s;
    animation-timing-function: ease-out;
  }
  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column-reverse;
    max-width: 100vw;
  }
`;
