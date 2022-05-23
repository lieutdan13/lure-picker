import React from "react";

import Question from "./Question";

const WaterSpeed = (props) => {
  const fieldKey = "water_speed";
  const question = "What is the speed of the water?";

  const fieldOptions = [
    { value: "still", label: "Still" },
    { value: "slow_flow", label: "Slow Flow" },
    { value: "fast_flow", label: "Fast Flow" }
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
export default WaterSpeed;
