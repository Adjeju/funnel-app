import React, { useRef } from "react";
import { getProjects } from "../../../utils/getProjects";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

const BackToProjectsButton = () => {
  "use client";
  const router = useRouter();
  const isProjectExistsRef = useRef(getProjects().length > 0);

  return (
    <>
      {isProjectExistsRef.current && (
        <Button
          onClick={() => router.push("/")}
          className="w-full md:w-44 mt-5"
        >
          Back to projects
        </Button>
      )}
    </>
  );
};

export default BackToProjectsButton;
