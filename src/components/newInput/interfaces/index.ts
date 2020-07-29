import { InputHTMLAttributes } from "react";

export interface INewInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode,
  icon?: string,
  label?: string,
  isEmpty?: boolean,
}
