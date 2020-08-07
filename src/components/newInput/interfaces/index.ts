import { InputHTMLAttributes } from "react";

export interface INewInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
  icon?: string
  label?: string
  isEmpty?: boolean
  errorMessage?: string | null
}

export interface IInputLabelProps {
  children?: React.ReactNode
  isEmpty?: boolean
}

export interface IValidationMessageProps {
  children?: React.ReactNode
}