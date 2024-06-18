import React from "react";
import { getVideoEmbedUrl } from "../../../../Resources/UniversalComponents";
import { IFrameVideoBlog } from "../../../Blog/Blog.Styled";
interface VideoLessonModelProps {
  element: any;
}

export default function VideoLessonModel({ element }: VideoLessonModelProps) {
  return <IFrameVideoBlog src={getVideoEmbedUrl(element.video)} />;
}
