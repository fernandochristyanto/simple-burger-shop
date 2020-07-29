import React from 'react'
import { INewInputProps } from '../interfaces';

import classes from './InputLabel.module.css';

const InputLabel: React.FC<INewInputProps> = (props) => {
  const classNames = [classes.InputLabel];
  props.isEmpty ? classNames.push(classes.Empty) : classNames.push(classes.NotEmpty);

  return (
    <div className={classNames.join(' ')}>
      {props.children}
    </div>
  )
}

export default InputLabel;
