import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
  slim?: boolean;
  title?: string;
  hideBottomBorder?: boolean;
  label?: string;
  labelTooltip?: string;
  isCollapsable?: boolean;
}

export const Block = ({
  children,
  className = "",
  slim = false,
  title = "",
  hideBottomBorder,
  label,
  labelTooltip,
  isCollapsable,
}: Props) => {
  return (
    <div
      className={clsx(
        "border-y border-skin-border bg-skin-block-bg text-base md:rounded-xl md:border",
        className
      )}
    >
      {title !== "" ? (
        <div
          className={clsx(
            "group flex h-[57px] justify-between rounded-t-none border-b border-skin-border px-4 pt-3 pb-[12px] md:rounded-t-lg",
            {
              "border-b-0": hideBottomBorder || isCollapsable,
            },
            { "cursor-pointer": isCollapsable }
          )}
        >
          <h4 className="flex items-center">
            <div>{title}</div>
          </h4>
          <div className="flex items-center">
            <div
              className={clsx("text-xs text-skin-link", {
                "cursor-help": labelTooltip,
              })}
            >
              {label}
            </div>
          </div>
        </div>
      ) : null}
      <div className={clsx("leading-5 sm:leading-6", { "p-4": !slim })}>
        {children}
      </div>
    </div>
  );
};
