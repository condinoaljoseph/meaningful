import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { ComponentProps, forwardRef, useId } from "react";

import { FieldError } from "./Form";

interface Props extends ComponentProps<"textarea"> {
  limit?: number;
  label?: string;
  className?: string;
  error?: boolean;
  count?: number;
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  function TextArea(
    { label, limit = 14000, className, error, count, ...props },
    ref
  ) {
    const id = useId();

    return (
      <div className="w-full">
        <div className="flex justify-between">
          <label
            className="mb-[2px] flex items-center gap-1 text-skin-text"
            htmlFor={id}
          >
            {label && <div>{label}</div>}
          </label>
          <div className="text-xs">
            {count} / {limit}
          </div>
        </div>
        <div className="peer min-h-[240px] overflow-hidden rounded-t-xl border border-skin-border focus-within:border-skin-text">
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
            maxLength={limit}
          />
        </div>
        <div className="relative flex items-center justify-between rounded-b-xl border border-t-0 border-skin-border py-1 px-2 peer-focus-within:border-skin-text">
          <span className="pointer-events-none relative pl-1 text-sm">
            <span>Use markdown to write and format posts.</span>
          </span>
          <a
            className="relative inline"
            rel="noreferrer"
            target="_blank"
            href="https://docs.github.com/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax"
          >
            <QuestionMarkCircleIcon className="w-[1em] h-[1em]" />
          </a>
        </div>
        {props.name && <FieldError name={props.name} />}
      </div>
    );
  }
);
