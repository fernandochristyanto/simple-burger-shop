import React from 'react';

import classes from './XScrollable.module.css';
import { XScrollItem } from '..';
import { IScrollableProps } from '../interfaces';

const xScrollable = (props: IScrollableProps) => {
  return (
    <div className={classes.XScrollable}>
      <div className={classes.XScrollWrapper}>
        <div className={classes.XScrollRail}>
          {props.children}
          <XScrollItem></XScrollItem>
        </div>
      </div>
    </div>
  )
}

export default xScrollable;
