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
    console.log("Setting " + event.target.name + "=" + event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    console.log("Set " + event.target.name + "=" + event.target.value);
  };

  const next = ({ step }) => {
    console.log("next button clicked with step: " + step);
    setCurrentStep(step);
    console.log("set currentStep to: " + step);
  };
  const back = ({ step }) => {
    console.log("back button clicked with step: " + step);
    setCurrentStep(step);
  };
  return (
    <>
      {(currentStep === "region" || formData["region"]) && (
        <Region
          data={formData}
          handleChange={handleChange}
          next={() => next({ step: "season" })}
        />
      )}
      {(currentStep === "season" || formData["season"]) && (
        <Season
          data={formData}
          handleChange={handleChange}
          next={() => next({ step: "submit" })}
          back={() => next({ step: "region" })}
        />
      )}
      {currentStep === "submit" && (
        <Submit data={formData} back={() => back({ step: "season" })} />
      )}
    </>
  );
};
export default MultiStepForm;
