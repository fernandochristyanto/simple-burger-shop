import React from 'react';
import { connect } from 'react-redux';

import classes from '../BurgerBuilder.module.css';
import Button from '../../../../../components/button/Button';
import { resetIngredient } from '../../../redux/actions';
import { IOrderControlsProps } from '../../../interfaces';
import { cartAddItem } from '../../../../burgerCart/redux/actions';
import { IBurgerBuilder } from '../../../../../interfaces';

const OrderControls = (props: IOrderControlsProps) => {
  return (
    <div className={classes.OrderControls}>
      <Button
        onClick={props.onResetBurger}
        variant="uncolored"
      >
        Reset Burger
      </Button>
      <Button
        variant="secondary"
      >
        Buy Now
      </Button>
      <Button
        onClick={() => props.onAddToCart(props.burger)}
        disabled={props.burger.ingredients ? false : true}
        variant="primary"
      >
        Add to Cart
      </Button>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onResetBurger: () => dispatch(resetIngredient()),
    onAddToCart: (burger: IBurgerBuilder) => dispatch(cartAddItem({ burger: burger })),
  };
};

const mapStateToProps = (state: any) => {
  return {
    burger: state.burgerBuilder.res,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderControls);
