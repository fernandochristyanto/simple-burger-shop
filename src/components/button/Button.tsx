import React, { ButtonHTMLAttributes } from 'react';

import classes from './Button.module.css';

declare interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: string;
  width?: string;
  height?: string;
};

const classChooser = (variant?: string) => {
  switch (variant) {
    case 'primary':
      return classes.primary;

    case 'secondary':
      return classes.secondary;

    case 'uncolored':
      return classes.uncolored;

    case 'circular':
      return classes.circular;

    default:
      return;
  }
}

const Button = (props: IButtonProps) => {
  const width = props.width ? props.width : props.height;
  const height = props.height ? props.height : props.width;

  const classNames = [classes.Button, classChooser(props.variant)]
  return (
    <button
      className={classNames.join(' ')}
      style={{ width: width, height: height }}
      {...props}
    >
      {props.children}
    </button>
  )
}

export default Button;
