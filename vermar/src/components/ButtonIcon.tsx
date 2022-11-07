import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
  ReactNode,
} from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
  className?: string;
  icon: ReactNode;
}

export const ButtonIcon = forwardRef<HTMLButtonElement, Props>(function Button(
  { className = "", children, icon, ...rest },
  ref
) {
  return (
    <div className="flex items-center space-x-2">
      <button
        className="flex items-center text-md rounded-full text-skin-text transition-colors duration-200 hover:text-skin-link"
        ref={ref}
        {...rest}
      >
        {icon}
      </button>
      {children}
    </div>
  );
});
