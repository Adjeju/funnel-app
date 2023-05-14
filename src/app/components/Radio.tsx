import React from "react";

type Props = { label: string; checked: boolean; onClick: () => void };

const Radio = ({ label, checked, onClick }: Props) => {
  return (
    <div className="flex gap-2 cursor-pointer" onClick={onClick} tabIndex={1}>
      <div className="w-6 h-6 flex items-center justify-center border bg-transparent border-white/30 rounded-full">
        {checked && (
          <div className="absolute w-3 h-3 rounded-full bg-primary" />
        )}
      </div>
      <div>{label}</div>
    </div>
  );
};

export default Radio;
