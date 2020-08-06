import React, { ButtonHTMLAttributes } from 'react';

import classes from './Button.module.css';

declare interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: string;
};

const classChooser = (variant?: string) => {
  switch (variant) {
    case 'primary':
      return classes.primary;

    case 'secondary':
      return classes.secondary;

    case 'uncolored':
      return classes.uncolored;

    default:
      return;
  }
}

const Button: React.FC<IButtonProps> = (props) => {
  const classNames = [classes.Button, classChooser(props.variant)]
  return (
    <button className={classNames.join(' ')} {...props}>
      {props.children}
    </button>
  )
}

export default Button;
