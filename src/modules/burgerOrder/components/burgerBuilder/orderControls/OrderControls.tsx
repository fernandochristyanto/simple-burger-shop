import React from 'react';

import classes from '../BurgerBuilder.module.css';
import Button from '../../../../../components/button/Button';

const OrderControls: React.FC = (props) => {
  return (
    <div className={classes.OrderControls}>
      <Button variant="uncolored">Reset Burger</Button>
      <Button variant="secondary">Buy Now</Button>
      <Button variant="primary">Add to Cart</Button>
    </div>
  )
}

export default OrderControls;
