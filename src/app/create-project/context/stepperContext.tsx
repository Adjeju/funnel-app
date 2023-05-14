import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Steps } from "../constants/createProjectForm";

export const StepperContext = createContext({
  activeStep: Steps.AddProjectStep,
  completed: { [Steps.AddProjectStep]: false } as {
    [k: number]: boolean;
  },
  handleNextStep: () => {},
  handlePrevStep: () => {},
});

export const StepperContextProvider = ({ children }: PropsWithChildren) => {
  const [activeStep, setActiveStep] = useState(Steps.AddProjectStep);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({ [Steps.AddProjectStep]: false });

  const handleNextStep = () => {
    setCompleted((prev) => ({ ...prev, [activeStep]: true }));
    setActiveStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setCompleted((prev) => ({ ...prev, [activeStep - 1]: false }));
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <StepperContext.Provider
      value={{ activeStep, handleNextStep, handlePrevStep, completed }}
    >
      {children}
    </StepperContext.Provider>
  );
};

export const useStepperContext = () => useContext(StepperContext);
