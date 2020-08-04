import React from 'react';

import classes from './XScrollable.module.css';
import { XScrollItem } from '..';

const xScrollable: React.FC = (props) => {
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
