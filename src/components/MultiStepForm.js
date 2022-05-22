import React, { useState } from "react";
import Region from "./Region";
import Season from "./Season";
import Submit from "./MultiStepSubmit";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState("region");
  const [formData, setFormData] = useState({
    region: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const next = ({ step }) => {
    console.log("next button clicked with step: " + step);
    setCurrentStep(step);
  };
  const back = ({ step }) => {
    console.log("back button clicked with step: " + step);
    setCurrentStep(step);
  };
  switch (currentStep) {
    case "region":
      return (
        <Region
          data={formData}
          handleChange={handleChange}
          next={() => next({ step: "season" })}
        />
      );
    case "season":
      return (
        <Season
          data={formData}
          handleChange={handleChange}
          next={() => next({ step: "submit" })}
          back={() => next({ step: "region" })}
        />
      );
    default:
      return <Submit data={formData} back={() => back({ step: "season" })} />;
  }
};
export default MultiStepForm;
