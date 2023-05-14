import React from "react";

type Props = {
  label: string;
  color?: "default" | "primary";
  onClick?: () => void;
  className?: string;
};

const colors = {
  default: "bg-zinc-50/10",
  primary: "text-primary bg-[#217DE1]/10",
} as Record<"default" | "primary", string>;

const Chip = ({ color = "default", label, onClick, className }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`${colors[color]} bg-b px-4 py-1.5 rounded-2xl ${className}`}
    >
      {label}
    </div>
  );
};

export default Chip;
