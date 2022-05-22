import React from "react";

import Question from "./Question";

const CloudCover = (props) => {
  const fieldKey = "cloud_cover";
  const question = "What is the cloud coverage?";

  const fieldOptions = [
    { value: "sunny", label: "Sunny" },
    { value: "partly_cloudy", label: "Partly Cloudy" },
    { value: "mostly_cloudy", label: "Mostly Cloudy" },
    { value: "overcast", label: "Overcast" }
  ];

  const { data, handleChange, next, back } = props;

  return (
    <Question
      data={data}
      fieldOptions={fieldOptions}
      fieldKey={fieldKey}
      question={question}
      handleChange={handleChange}
      next={next}
      back={back}
    />
  );
};
export default CloudCover;
