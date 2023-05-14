"use client";

import { StepperContextProvider } from "./context/stepperContext";

export default function CreateProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StepperContextProvider>{children}</StepperContextProvider>;
}
