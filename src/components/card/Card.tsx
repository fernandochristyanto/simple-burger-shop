import React from 'react'

import classes from './Card.module.css';

declare interface ICardProps {
  children?: React.ReactNode,
  width?: string,
}

const Card: React.FC<ICardProps> = (props) => {
  return (
    <div
      className={classes.Card}
      style={{ width: props.width }}
    >
      {props.children}
    </div>
  )
}

export default Card;
