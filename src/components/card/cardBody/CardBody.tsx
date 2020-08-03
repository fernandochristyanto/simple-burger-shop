import React from 'react';

import classes from '../Card.module.css';

const CardBody: React.FC = (props) => {
  return (
    <div className={classes.CardBody}>
      {props.children}
    </div>
  )
}

export default CardBody;
