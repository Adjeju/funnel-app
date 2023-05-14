import React, { ChangeEvent } from "react";
import { useStepperContext } from "../context/stepperContext";
import { useFormContext, Controller } from "react-hook-form";
import { productsLaunches } from "../constants/createProjectForm";
import TextField from "@/app/components/TextField";
import Button from "@/app/components/Button";
import Radio from "@/app/components/Radio";

const CreateProjectStep = () => {
  const {
    setValue,
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  const { handlePrevStep } = useStepperContext();

  const numberOfWorkers = watch("numberOfWorkers");
  const launch = watch("launch");

  const handleWorkersChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.currentTarget.value;
    if (isNaN(value) || value <= 1) {
      setValue("numberOfWorkers", 1);
      return;
    }
    setValue("numberOfWorkers", value);
  };

  return (
    <div>
      <div className="text-primary text-sm">Create Project</div>
      <div className="text-3xl font-medium mt-2 mb-7">
        How many full-time workers on the project?
      </div>
      <div className="flex items-center gap-5 mb-12">
        <Button
          onClick={() => setValue("numberOfWorkers", +numberOfWorkers - 1)}
          disabled={numberOfWorkers <= 1}
        >
          -
        </Button>
        <Controller
          name="numberOfWorkers"
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              className="w-full h-12 md:w-[279px]"
              {...field}
              onBlur={handleWorkersChange}
            />
          )}
        />
        <Button
          onClick={() => setValue("numberOfWorkers", +numberOfWorkers + 1)}
        >
          +
        </Button>
      </div>
      <div className="mb-7">
        <div className="text-3xl font-medium mt-2 mb-7">
          Are you pre or post product launch?
        </div>
        <div className="flex flex-col gap-6">
          {productsLaunches.map((val, idx) => (
            <Radio
              key={idx}
              onClick={() => setValue("launch", val)}
              label={val}
              checked={launch === val}
            />
          ))}
        </div>
      </div>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            error={Boolean(errors.email)}
            helperText={errors.email?.message as string}
            className="mb-3"
            fullWidth
            label="Contact Email"
            {...field}
          />
        )}
      />
      <div className="flex gap-8 mt-7">
        <Button className="w-full md:w-32" onClick={handlePrevStep}>
          Back
        </Button>
        <Button color="primary" type="submit" className="w-full md:w-80">
          Create project
        </Button>
      </div>
    </div>
  );
};

export default CreateProjectStep;
