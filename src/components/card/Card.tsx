import React from 'react'

import classes from './Card.module.css';

declare interface ICardProps {
  children?: React.ReactNode;
  width?: string;
  hoverable?: boolean;
  borderless?: boolean;
}

const Card = (props: ICardProps) => {
  const classNames = [
    classes.Card,
    props.hoverable ? classes.Hoverable : '',
    props.borderless ? classes.Borderless : ''
  ];
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
