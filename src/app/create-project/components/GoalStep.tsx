import React from "react";
import { useStepperContext } from "../context/stepperContext";
import { useFormContext } from "react-hook-form";
import { Steps, goals, stepFields } from "../constants/createProjectForm";
import Radio from "@/app/components/Radio";
import Button from "@/app/components/Button";

const GoalStep = () => {
  const { watch, trigger, setValue } = useFormContext();
  const { handlePrevStep, handleNextStep } = useStepperContext();

  const handleValid = async () => {
    const isValid = await trigger(stepFields[Steps.GoalStep]);
    if (isValid) {
      handleNextStep();
    }
  };

  const goal = watch("goal");

  return (
    <div>
      <div className="text-primary">Projects details</div>
      <div className="text-3xl mt-2 mb-3 font-medium">
        What is your goal with AlphaQuest?
      </div>
      <div className="flex flex-col gap-6">
        {goals.map((val, idx) => (
          <Radio
            key={idx}
            onClick={() => setValue("goal", val)}
            label={val}
            checked={goal === val}
          />
        ))}
      </div>
      <div className="mt-7 flex gap-8">
        <Button className="w-full md:w-32" onClick={handlePrevStep}>
          Back
        </Button>
        <Button
          color="primary"
          className="w-full md:w-80"
          onClick={handleValid}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default GoalStep;
