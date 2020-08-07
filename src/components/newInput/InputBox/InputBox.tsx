import React from 'react'
import { INewInputProps } from '../interfaces';

import classes from './InputBox.module.css';

const InputBox = (props: INewInputProps) => {
  return (
    <input className={classes.InputBox} {...props} />
  )
}

export default InputBox;
