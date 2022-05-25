import React, { useState } from "react";
import Region from "./Region";
import Season from "./Season";
import AirTemp from "./AirTemp";
import CloudCover from "./CloudCover";
import WaterTemp from "./WaterTemp";
import WaterClarity from "./WaterClarity";
import WaterSpeed from "./WaterSpeed";
import Submit from "./MultiStepSubmit";
import LureList from "./LureList";

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    region: "",
    season: "",
    air_temp: "",
    cloud_cover: "",
    water_temp: "",
    water_clarity: "",
    water_speed: ""
  });
  const components = [
    [Season, "season"],
    [WaterTemp, "water_temp"],
    [WaterClarity, "water_clarity"]
    // [Region, "region"],
    // [AirTemp, "air_temp"],
    // [CloudCover, "cloud_cover"],
    // [WaterSpeed, "water_speed"]
  ];
  const [currentStep, setCurrentStep] = useState(components[0][1]);
  const submitBackStep = components[components.length - 1][1];

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
  const questions = Object.entries(components).map(([key, value]) => {
    const DynamicComponent = value[0];
    const questionKey = value[1];
    const keyAsInt = parseInt(key, 10);
    const nextStep =
      typeof components[keyAsInt + 1] !== "undefined"
        ? components[keyAsInt + 1][1]
        : "submit";

    return (
      <div key={key}>
        {(currentStep === questionKey || formData[questionKey]) && (
          <DynamicComponent
            data={formData}
            handleChange={handleChange}
            next={() => next({ step: nextStep })}
          />
        )}
      </div>
    );
  });
  return (
    <>
      {questions}
      <LureList filters={formData} />
      {currentStep === "submit" && (
        <Submit
          data={formData}
          back={(event) => back({ event: event, step: submitBackStep })}
        />
      )}
    </>
  );
};
export default MultiStepForm;
