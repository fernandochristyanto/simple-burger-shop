import React from 'react'

import classes from '../xScrollable.module.css';

const XScrollItem: React.FC = (props) => {
  return (
    <div className={classes.XScrollItem}>
      {props.children}
    </div>
  )
}

export default XScrollItem;
