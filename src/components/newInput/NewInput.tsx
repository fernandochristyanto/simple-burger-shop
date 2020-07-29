import React from 'react';

import classes from './NewInput.module.css';
import { INewInputProps } from './interfaces/';
import InputBox from './InputBox/InputBox';
import InputLabel from './InputLabel/InputLabel';
import InputIcon from './InputIcon/InputIcon';

const NewInput: React.FC<INewInputProps> = ({ isEmpty, ...props }) => {
  return (
    <div className={classes.NewInput}>
      <InputBox {...props} />
      <InputLabel isEmpty={isEmpty}>{props.label}</InputLabel>
      <InputIcon>{props.icon}</InputIcon>
    </div>
  )
}

export default NewInput;
