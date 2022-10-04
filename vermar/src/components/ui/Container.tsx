import clsx from "clsx";
import { ReactNode } from "react";

export const Container = ({
  slim = true,
  className = "",
  children,
}: {
  slim?: boolean;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={clsx(
        slim ? "px-0 md:px-4" : "px-4",
        "mx-auto max-w-[1012px]",
        className
      )}
    >
      {children}
    </div>
  );
};
