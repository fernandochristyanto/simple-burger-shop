import React from 'react';

import classes from '../XScrollable.module.css';

const XScrollItem: React.FC = (props) => {
  return (
    <div className={classes.XScrollItem}>
      {props.children}
    </div>
  )
}

export default XScrollItem;
