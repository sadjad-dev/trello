import { twMerge } from "tailwind-merge";

import IButtonProps from "./types";
import ButtonLoading from "./ButtonLoading";
import { bindVariants } from "./utils";

export default function Button(props: IButtonProps) {
  const { className, children, isLoading, variant = "filledBlue", disabled = false } = props;

  return (
    <button
      type="button"
      {...props}
      disabled={disabled}
      className={twMerge(bindVariants[variant], "flex items-center justify-center", isLoading ? "px-2" : "", className)}
    >
      {isLoading ? <ButtonLoading /> : children}
    </button>
  );
}