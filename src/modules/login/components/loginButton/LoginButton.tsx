import React, { ButtonHTMLAttributes } from 'react'

import classes from './LoginButton.module.css';

const LoginButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button className={classes.LoginButton} {...props}>
      Login
    </button>
  )
}

export default LoginButton;
