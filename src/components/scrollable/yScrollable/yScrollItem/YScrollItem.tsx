import React from 'react'

import classes from '../YScrollable.module.css';
import { IScrollItemProps } from '../../interfaces';

const YScrollItem = (props: IScrollItemProps) => {
  return (
    <div className={classes.YScrollItem}>
      {props.children}
    </div>
  )
}

export default YScrollItem;
