import React from 'react'

import classes from './Card.module.css';

declare interface ICardProps {
  children?: React.ReactNode;
  width?: string;
  hoverable?: boolean;
}

const Card: React.FC<ICardProps> = (props) => {
  const classNames = [classes.Card, props.hoverable ? classes.Hoverable : ''];
  return (
    <div
      className={classNames.join(' ')}
      style={{ width: props.width }}
    >
      {props.children}
    </div>
  )
}

export default Card;
