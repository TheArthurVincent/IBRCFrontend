import React from "react";
import { MyHeadersType } from "../../../../Resources/types.universalInterfaces";
import { readText } from "../Functions/FunctionLessons";
import {
  ImgLesson,
  LiGridImageLessons,
  UlGridImageLessons,
} from "../Functions/EnglishActivities.Styled";
import TextAreaLesson from "../Functions/TextAreaLessons";
interface ImageLessonModelProps {
  headers: MyHeadersType | null;
  element: any;
}

export default function ImageLessonModel({
  headers,
  element,
}: ImageLessonModelProps) {
  return (
    <div
      className="sentences"
      style={{
        display: "flex",
        padding: "5px",
        margin: "10px 0",
      }}
    >
      <UlGridImageLessons>
        {element.images &&
          element.images.map((image: any, i: number) => (
            <LiGridImageLessons key={i}>
              <ImgLesson src={image.img} />
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontStyle: "italic",
                  marginTop: "1.3rem",
                }}
              >
                <button
                  className="audio-button"
                  onClick={() => readText(image.text, true)}
                >
                  <i className="fa fa-volume-up" aria-hidden="true" />
                </button>
                <span>{image.text}</span>
              </span>
              <TextAreaLesson />
            </LiGridImageLessons>
          ))}
      </UlGridImageLessons>
    </div>
  );
}
