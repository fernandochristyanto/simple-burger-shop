import React from 'react'

import classes from './InputIcon.module.css'

const InputIcon: React.FC = (props) => {
  return (
    <span className={classes.InputIcon + ' material-icons-outlined'}>
      {props.children}
    </span>
  )
}

export default InputIcon;
