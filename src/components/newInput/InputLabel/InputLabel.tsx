import React from 'react'
import { IInputLabelProps } from '../interfaces';

import classes from './InputLabel.module.css';

const InputLabel = (props: IInputLabelProps) => {
  const classNames = [classes.InputLabel];
  props.isEmpty ? classNames.push(classes.Empty) : classNames.push(classes.NotEmpty);

  return (
    <div className={classNames.join(' ')}>
      {props.children}
    </div>
  )
}

export default InputLabel;
