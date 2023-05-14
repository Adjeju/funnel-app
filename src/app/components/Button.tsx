import React, { ComponentProps } from "react";

type ButtonColors = "default" | "primary" | "error";

type Props = {
  color?: ButtonColors;
} & ComponentProps<"button">;

const colors = {
  default: "bg-zinc-50/10",
  primary: "bg-primary text-[#101313]",
  error: "bg-red-500",
} as Record<ButtonColors, string>;

const Button = ({
  children,
  className,
  color = "default",
  type = "button",
  disabled,
  onClick,
  ...rest
}: Props) => {
  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      className={`${className} ${colors[color]}
      ${
        disabled && "cursor-not-allowed hover:opacity-100"
      } h-12 font-medium py-[13px] px-6 rounded-[10px] hover:opacity-80 transition`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
