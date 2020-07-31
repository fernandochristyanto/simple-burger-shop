import React from 'react';

import classes from './NewInput.module.css';
import { INewInputProps } from './interfaces/';
import InputBox from './inputBox/InputBox';
import InputLabel from './inputLabel/InputLabel';
import MaterialIcon from '../materialIcon/MaterialIcon';
import ValidationMessage from './validationMessage/ValidationMessage';

const NewInput: React.FC<INewInputProps> = ({ isEmpty, errorMessage, ...props }) => {
  return (
    <div className={classes.NewInput}>
      <InputBox {...props} />
      <InputLabel isEmpty={isEmpty}>{props.label}</InputLabel>
      <MaterialIcon iconName={props.icon} fontSize='1.25rem' className={[classes.Icon]} />
      {errorMessage ? <ValidationMessage>{errorMessage}</ValidationMessage> : null}
    </div>
  )
}

export default NewInput;
