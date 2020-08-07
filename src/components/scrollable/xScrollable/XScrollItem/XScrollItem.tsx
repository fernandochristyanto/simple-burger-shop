import React from 'react';

import classes from '../XScrollable.module.css';
import { IScrollItemProps } from '../../interfaces';

const XScrollItem = (props: IScrollItemProps) => {
  return (
    <div className={classes.XScrollItem}>
      {props.children}
    </div>
  )
}

export default XScrollItem;
