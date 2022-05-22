import React from "react";

import Question from "./Question";

const Region = (props) => {
  const fieldKey = "region";
  const question = "What region are you in?";

  const fieldOptions = [
    { value: "northeast", label: "Northeast" },
    { value: "southeast", label: "Southeast" },
    { value: "midwest", label: "Midwest" },
    { value: "upper_midwest", label: "Upper Midwest" },
    { value: "south", label: "South" },
    { value: "northern_rockies", label: "Northern Rockies" },
    { value: "southwest", label: "Southwest" },
    { value: "northwest", label: "Northwest" },
    { value: "west", label: "West" }
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
export default Region;
