import React, { useState } from "react";
import Region from "./Region";
import Season from "./Season";
import AirTemp from "./AirTemp";
import Submit from "./MultiStepSubmit";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState("region");
  const [formData, setFormData] = useState({
    region: "",
    season: "",
    air_temp: ""
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
  const back = ({ event, step }) => {
    event.preventDefault();
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
          next={() => next({ step: "air_temp" })}
          back={(event) => back({ event: event, step: "region" })}
        />
      )}
      {(currentStep === "air_temp" || formData["air_temp"]) && (
        <AirTemp
          data={formData}
          handleChange={handleChange}
          next={() => next({ step: "submit" })}
          back={(event) => back({ event: event, step: "season" })}
        />
      )}
      {currentStep === "submit" && (
        <Submit
          data={formData}
          back={(event) => back({ event: event, step: "season" })}
        />
      )}
    </>
  );
};
export default MultiStepForm;
