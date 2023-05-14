type Props = {
  activeStep: number;
  steps: string[];
  completed: {
    [k: number]: boolean;
  };
};

const Stepper = ({ activeStep, steps, completed }: Props) => {
  const isActive = (idx: number) => idx === activeStep;

  const isCompleted = (idx: number) => completed[idx];

  const isLastStep = (idx: number) => steps.length - 1 === idx;

  return (
    <div className="flex flex-row justify-center md:flex-col">
      {steps.map((step, idx) => (
        <div key={idx} className="flex md:flex-col">
          <div
            className={`flex gap-2 items-center text-white/30 
            ${isActive(idx) && "!text-white"} 
            ${isCompleted(idx) && "!text-primary"}`}
          >
            <div
              className={`w-2 h-2 bg-white/30 rounded-full flex-shrink-0 
              ${isActive(idx) && "!bg-white"} 
              ${isCompleted(idx) && "!bg-primary"}`}
            />
            <div className="hidden md:block">{step}</div>
          </div>
          <div
            className={`border-white/30 w-10 h-[1px] self-center border-t mx-1 
            md:h-[25px] md:ml-1 md:border-l md:self-start md:border-t-0
            ${isCompleted(idx) && "!border-primary"} 
            ${isLastStep(idx) && "hidden"} `}
          />
        </div>
      ))}
    </div>
  );
};

export default Stepper;
