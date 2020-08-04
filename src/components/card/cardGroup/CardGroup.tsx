import React from 'react'

import classes from '../Card.module.css';

const CardGroup: React.FC = (props) => {
  return (
    <div className={classes.CardGroup}>
      {props.children}
    </div>
  )
}

export default CardGroup;
