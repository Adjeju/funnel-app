import React from "react";
import { useStepperContext } from "../context/stepperContext";
import { useFormContext, Controller } from "react-hook-form";
import { Steps, categories, stepFields } from "../constants/createProjectForm";
import TextField from "@/app/components/TextField";
import Chip from "@/app/components/Chip";
import Button from "@/app/components/Button";

const AddProjectStep = () => {
  const {
    watch,
    trigger,
    setValue,
    control,
    formState: { errors },
  } = useFormContext();
  const { handleNextStep } = useStepperContext();

  const category = watch("category");

  const handleValid = async () => {
    const isValid = await trigger(stepFields[Steps.AddProjectStep]);
    if (isValid) {
      handleNextStep();
    }
  };

  return (
    <div>
      <div className="text-primary text-sm">
        To Create Quest you need firstly create Project
      </div>
      <div className="text-3xl mt-2 mb-7 font-medium">Add New Project</div>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            fullWidth
            error={Boolean(errors.name)}
            helperText={errors.name?.message as string}
            className="mb-7"
            label="Project Name (It can be changed later)"
            {...field}
          />
        )}
      />
      <Controller
        name="url"
        control={control}
        render={({ field }) => (
          <TextField
            fullWidth
            error={Boolean(errors.url)}
            helperText={errors.url?.message as string}
            startLabel="Alphaguilty.io/"
            className="mb-7"
            label="Project URL (It cannot be changed after creation)"
            {...field}
          />
        )}
      />
      <div className="flex flex-col gap-2">
        <div>Project Category (It cannot be changed after creation)</div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((val, idx) => (
            <Chip
              className="cursor-pointer"
              key={idx}
              label={val}
              color={category === val ? "primary" : "default"}
              onClick={() => setValue("category", val)}
            />
          ))}
        </div>
      </div>
      <Button
        color="primary"
        className="w-full mt-7 md:w-80 "
        onClick={handleValid}
      >
        Add project
      </Button>
    </div>
  );
};

export default AddProjectStep;
