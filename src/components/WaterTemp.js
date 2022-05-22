import React from "react";

import Question from "./Question";

const WaterTemp = (props) => {
  const fieldKey = "water_temp";
  const question = "What is the water temperature?";

  const fieldOptions = [
    { value: "unknown", label: "I don't know" },
    { value: "50-59", label: "50°F-59°F" },
    { value: "60-69", label: "60°F-69°F" },
    { value: ">70", label: ">70°F" }
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
export default WaterTemp;
