import React, { useState } from "react";
import Region from "./Region";
import Season from "./Season";
import AirTemp from "./AirTemp";
import CloudCover from "./CloudCover";
import WaterTemp from "./WaterTemp";
import WaterClarity from "./WaterClarity";
import WaterSpeed from "./WaterSpeed";
import Submit from "./MultiStepSubmit";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState("region");
  const [formData, setFormData] = useState({
    region: "",
    season: "",
    air_temp: "",
    cloud_cover: "",
    water_temp: "",
    water_clarity: "",
    water_speed: ""
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
          next={() => next({ step: "cloud_cover" })}
          back={(event) => back({ event: event, step: "season" })}
        />
      )}
      {(currentStep === "cloud_cover" || formData["cloud_cover"]) && (
        <CloudCover
          data={formData}
          handleChange={handleChange}
          next={() => next({ step: "water_temp" })}
          back={(event) => back({ event: event, step: "air_temp" })}
        />
      )}
      {(currentStep === "water_temp" || formData["water_temp"]) && (
        <WaterTemp
          data={formData}
          handleChange={handleChange}
          next={() => next({ step: "water_clarity" })}
          back={(event) => back({ event: event, step: "cloud_cover" })}
        />
      )}
      {(currentStep === "water_clarity" || formData["water_clarity"]) && (
        <WaterClarity
          data={formData}
          handleChange={handleChange}
          next={() => next({ step: "water_speed" })}
          back={(event) => back({ event: event, step: "water_temp" })}
        />
      )}
      {(currentStep === "water_speed" || formData["water_speed"]) && (
        <WaterSpeed
          data={formData}
          handleChange={handleChange}
          next={() => next({ step: "submit" })}
          back={(event) => back({ event: event, step: "water_clarity" })}
        />
      )}
      {currentStep === "submit" && (
        <Submit
          data={formData}
          back={(event) => back({ event: event, step: "water_speed" })}
        />
      )}
    </>
  );
};
export default MultiStepForm;
