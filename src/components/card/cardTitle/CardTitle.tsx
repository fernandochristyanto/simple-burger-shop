import React from 'react';

import classes from '../Card.module.css';

declare interface ICardTitleProps {
  children?: React.ReactNode
}

const CardTitle = (props: ICardTitleProps) => {
  return (
    <div className={classes.CardTitle}>
      {props.children}
    </div>
  )
}

export default CardTitle;
