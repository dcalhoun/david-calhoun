import React from "react";
import TextButton from "./TextButton";
import Paragraph from "./Paragraph";

export default function IssueCTA(props) {
  return (
    <>
      <span className="h-1 w-full mb-4 lg:mb-8 inline-block bg-gray-400" />
      <Paragraph className="mb-4 lg:mb-8">
        Questions, comments, suggestions?{" "}
        <TextButton
          href={`https://github.com/dcalhoun/dcalhoun.github.io/issues/new?title=${props.title}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open an issue
        </TextButton>
        .
      </Paragraph>
    </>
  );
}
