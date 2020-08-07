import React from 'react';

import classes from './ValidationMessage.module.css';
import MaterialIcon from '../../materialIcon/MaterialIcon';
import { IValidationMessageProps } from '../interfaces';

const ValidationMessage = (props: IValidationMessageProps) => {
  return (
    <div className={classes.ValidationMessage}>
      <MaterialIcon iconName='error' />
      <span>{props.children}</span>
    </div>
  )
}

export default ValidationMessage;
