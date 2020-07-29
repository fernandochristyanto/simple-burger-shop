import React from 'react'
import { INewInputProps } from '../interfaces';

import classes from './InputBox.module.css';

const InputBox: React.FC<INewInputProps> = (props) => {
  return (
    <input className={classes.InputBox} {...props} />
  )
}

export default InputBox;
