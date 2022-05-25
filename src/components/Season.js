import React from "react";

import Question from "./Question";

const Season = (props) => {
  const fieldKey = "season";
  const question = "What season are you in?";

  const fieldOptions = [
    { value: "spring", label: "Spring" },
    { value: "spawn", label: "Spawn" },
    { value: "summer", label: "Summer" },
    { value: "autumn", label: "Autumn" },
    { value: "winter", label: "Winter" }
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
export default Season;
