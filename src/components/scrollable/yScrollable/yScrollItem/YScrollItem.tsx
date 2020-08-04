import React from 'react'

import classes from '../YScrollable.module.css';

const YScrollItem: React.FC = (props) => {
  return (
    <div className={classes.YScrollItem}>
      {props.children}
    </div>
  )
}

export default YScrollItem;
