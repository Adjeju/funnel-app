import React, {
  ComponentProps,
  forwardRef,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type Props = {
  label?: string;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  startLabel?: string;
} & ComponentProps<"input">;

const EXTRA_SPACE_AFTER_START_LABEL = 2;

const TextField = forwardRef<HTMLInputElement, Props>(
  (
    { label, className, error, helperText, fullWidth, startLabel, ...rest },
    ref
  ) => {
    const [startLabelWidth, setStartLabelWidth] = useState(0);
    const startLabelRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      setStartLabelWidth(startLabelRef?.current?.offsetWidth ?? 0);
    }, []);

    return (
      <div className={`${className} ${error ? "text-red-500" : ""} `}>
        {label && <div className="mb-2">{label}</div>}
        <div className="relative">
          {startLabel && (
            <div
              ref={startLabelRef}
              className="absolute top-1/2 text-zinc-50/30 -translate-y-1/2 left-4 pointer-events-none"
            >
              {startLabel}
            </div>
          )}
          <input
            className={`px-4 py-3 rounded-[10px] border-zinc-50/10 border bg-transparent 
            ${fullWidth ? "w-full" : ""} 
            ${error ? "border-red-500" : ""}`}
            style={{
              paddingLeft:
                startLabelWidth + EXTRA_SPACE_AFTER_START_LABEL + 4 * 4,
            }}
            ref={ref}
            autoComplete="off"
            {...rest}
          />
        </div>
        {error && <div className="ml-3 mt-1 text-sm">{helperText}</div>}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
