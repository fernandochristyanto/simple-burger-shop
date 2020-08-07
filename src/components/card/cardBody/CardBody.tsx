import React, { ReactNode } from 'react';

import classes from '../Card.module.css';

declare interface ICardBodyProps {
  children?: React.ReactNode
}

const CardBody = (props: ICardBodyProps) => {
  return (
    <div className={classes.CardBody}>
      {props.children}
    </div>
  )
}

export default CardBody;
