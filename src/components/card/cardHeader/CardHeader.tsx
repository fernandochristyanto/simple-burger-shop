import React from 'react';

import classes from '../Card.module.css';

declare interface ICardHeaderProps {
  children?: React.ReactNode
}

const CardHeader = (props: ICardHeaderProps) => {
  return (
    <div className={classes.CardHeader}>
      {props.children}
    </div>
  )
}

export default CardHeader;
