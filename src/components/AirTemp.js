import React from "react";

import Question from "./Question";

const AirTemp = (props) => {
  const fieldKey = "air_temp";
  const question = "What is the air temperature?";

  const fieldOptions = [
    { value: "<32", label: "<32°F" },
    { value: "33-49", label: "33°F-49°F" },
    { value: "50-64", label: "50°F-64°F" },
    { value: "66-79", label: "66°F-79°F" },
    { value: ">80", label: ">80°F" }
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
export default AirTemp;
