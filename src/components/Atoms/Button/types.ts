import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { bindVariants } from "./utils";

interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isLoading?: boolean;
  disabled?: boolean;
  variant?: keyof typeof bindVariants;
}

export default IButtonProps;
