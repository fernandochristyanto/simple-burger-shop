import React from 'react'

import classes from '../Card.module.css';

declare interface ICardGroupProps {
  children?: React.ReactNode
}

const CardGroup = (props: ICardGroupProps) => {
  return (
    <div className={classes.CardGroup}>
      {props.children}
    </div>
  )
}

export default CardGroup;
