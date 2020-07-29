import React from 'react';

import classes from './CardTitle.module.css';

const CardTitle: React.FC = (props) => {
  return (
    <div className={classes.CardTitle}>
      {props.children}
    </div>
  )
}

export default CardTitle