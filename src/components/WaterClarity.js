import React from "react";

import Question from "./Question";

const WaterClarity = (props) => {
  const fieldKey = "water_clarity";
  const question = "What is the water clarity/visibility?";

  const fieldOptions = [
    { value: "clear", label: "Clear (6+ feet)" },
    { value: "stained", label: "Stained (2-6 feet)" },
    { value: "muddy", label: "Muddy (<2 feet)" }
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
export default WaterClarity;
