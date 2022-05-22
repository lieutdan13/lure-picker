import React from "react";

import AnswerButton from "./AnswerButton";

const Season = (props) => {
  const fieldKey = "season";
  const fieldLabel = "Season";

  const fieldOptions = [
    { value: "spring", label: "Spring" },
    { value: "summer", label: "Summer" },
    { value: "autumn", label: "Autumn" },
    { value: "winter", label: "Winter" }
  ];

  const { data, handleChange, next, back } = props;

  const handleClick = (event) => {
    handleChange(event);
    next();
  };

  const buttons = Object.entries(fieldOptions).map(([key, value]) => (
    <AnswerButton
      key={key}
      name={fieldKey}
      value={value.value}
      label={value.label}
      currentValue={data[fieldKey]}
      handleClick={handleClick}
    />
  ));

  return (
    <form>
      <p>
        <label htmlFor={fieldKey}>{fieldLabel}:</label>
        <br />
        {buttons}
      </p>
      {back && <button onClick={back}>Back</button>}
    </form>
  );
};
export default Season;
