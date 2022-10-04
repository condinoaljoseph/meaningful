import clsx from "clsx";
import { ComponentProps, forwardRef, useId } from "react";

import { FieldError } from "./Form";

interface Props extends ComponentProps<"textarea"> {
  label?: string;
  className?: string;
  error?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  function TextArea({ label, className, error, ...props }, ref) {
    const id = useId();

    return (
      <div className="w-full">
        <label
          className="mb-[2px] flex items-center gap-1 text-skin-text"
          htmlFor={id}
        >
          {label && <div>{label}</div>}
        </label>
        <div className="peer min-h-[240px] overflow-hidden rounded-xl border border-skin-border focus-within:border-skin-text">
          <textarea
            id={id}
            className={clsx(
              "s-input mt-0 h-full min-h-[240px] w-full !rounded-xl border-none pt-0 text-base",
              { "!border-red": error },
              { "cursor-not-allowed placeholder:!opacity-30": props.disabled },
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {props.name && <FieldError name={props.name} />}
      </div>
    );
  }
);
