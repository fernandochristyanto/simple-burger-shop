import React from 'react';
import { connect } from 'react-redux';

import classes from '../BurgerBuilder.module.css';
import Button from '../../../../../components/button/Button';
import { resetIngredient } from '../../../redux/actions';
import { IOrderControlsProps } from '../../../interfaces';

const OrderControls = (props: IOrderControlsProps) => {
  return (
    <div className={classes.OrderControls}>
      <Button onClick={props.onResetBurger} variant="uncolored">Reset Burger</Button>
      <Button variant="secondary">Buy Now</Button>
      <Button variant="primary">Add to Cart</Button>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onResetBurger: () => dispatch(resetIngredient()),
  };
};

export default connect(null, mapDispatchToProps)(OrderControls);
