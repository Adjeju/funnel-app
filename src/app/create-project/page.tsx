"use client";

import AddProjectStep from "./components/AddProjectStep";
import { useStepperContext } from "./context/stepperContext";
import GoalStep from "./components/GoalStep";
import CreateProjectStep from "./components/CreateProjectStep";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formDefaultValues, steps } from "./constants/createProjectForm";
import { useRouter } from "next/navigation";
import { stepperValidationSchema } from "./validation/stepperValidationSchema";
import Stepper from "../components/Stepper";
import Image from "next/image";
import gradientSvg from "../../../public/gradient.svg";
import { createElement } from "react";
import { Project } from "../types/Project";
import {
  LOCAL_STORAGE_PROJECT_KEY,
  getProjects,
} from "../../../utils/getProjects";
import dynamic from "next/dynamic";

const stepToComponent = [AddProjectStep, GoalStep, CreateProjectStep];

type CreateProjectFormFields = Project;

const DynamicBackToProjectsButton = dynamic(
  () => import("../components/BackToProjectsButton"),
  { ssr: false }
);

export default function Home() {
  const router = useRouter();
  const { activeStep, completed } = useStepperContext();

  const methods = useForm({
    defaultValues: formDefaultValues,
    resolver: yupResolver(stepperValidationSchema),
    mode: "onChange",
  });

  const onSubmit = (data: CreateProjectFormFields) => {
    localStorage.setItem(
      LOCAL_STORAGE_PROJECT_KEY,
      JSON.stringify([...getProjects(), data])
    );
    router.push("/");
  };

  return (
    <div className="flex flex-col p-4 md:p-0 min-h-screen md:flex-row">
      <div className="pt-[72px] px-[120px] md:w-64 md:shadow-[1px_0px_0px_#2D3232] md:px-7 md:py-12 md:relative">
        <Stepper activeStep={activeStep} steps={steps} completed={completed} />
        <Image
          className="hidden md:block md:absolute md:bottom-0 md:left-[-5px]"
          src={gradientSvg}
          width={270}
          height={270}
          alt="gradient"
          priority
        />
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="mt-5 md:py-24 md:m-0 md:px-12"
        >
          {createElement(stepToComponent[activeStep])}
          <DynamicBackToProjectsButton />
        </form>
      </FormProvider>
    </div>
  );
}
