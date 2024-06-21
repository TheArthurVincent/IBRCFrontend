import React from "react";
import TextAreaLesson from "../Functions/TextAreaLessons";
interface TextLessonModelSlideProps {
  text: string;
}

export default function TextLessonModelSlide({
  text,
}: TextLessonModelSlideProps) {
  return (
    <div
      style={{
        padding: "5px",
        margin: "10px 0",
        fontSize: "2rem",
      }}
    >
      <div>
        {text}
        <TextAreaLesson />
      </div>
    </div>
  );
}
