import React, { ButtonHTMLAttributes } from 'react'

import classes from './LoginButton.module.css';
import MaterialIcon from '../../../../components/materialIcon/MaterialIcon';

const LoginButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button className={classes.LoginButton} {...props}>
      {!props.disabled ? 'Login' :
        <MaterialIcon iconName="cached" fontSize="1.25rem" className={["spinning"]} />
      }
    </button>
  )
}

export default LoginButton;
