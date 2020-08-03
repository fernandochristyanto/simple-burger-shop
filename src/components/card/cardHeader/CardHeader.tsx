import React from 'react';

import classes from '../Card.module.css';

const CardHeader: React.FC = (props) => {
  return (
    <div className={classes.CardHeader}>
      {props.children}
    </div>
  )
}

export default CardHeader;
