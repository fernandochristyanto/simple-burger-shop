import React from 'react'

import classes from './YScrollable.module.css';
import { YScrollItem } from '../';
import { IScrollableProps } from '../interfaces';

const YScrollable = (props: IScrollableProps) => {
  return (
    <div className={classes.YScrollable}>
      <div className={classes.YScrollWrapper}>
        <div className={classes.YScrollRail}>
          {props.children}
          <YScrollItem></YScrollItem>
        </div>
      </div>
    </div>
  )
}

export default YScrollable;
