import React from 'react'

import classes from '../../Cart.module.css';
import Button from '../../../../../../components/button/Button';
import MaterialIcon from '../../../../../../components/materialIcon/MaterialIcon';
import { connect } from 'react-redux';
import { cartItemSetQty } from '../../../../redux/actions';

declare interface ICartItemFooter {
  ingredients: string
  quantity: number
  onCartItemSetQty: (ingredients: string, qty: number) => Promise<void>
}

const CartItemFooter = (props: ICartItemFooter) => {
  return (
    <div className={classes.CartItemFooter}>
      <Button
        width="2rem"
        variant="circular"
        disabled={props.quantity <= 1}
        onClick={() => props.onCartItemSetQty(props.ingredients, props.quantity - 1)}
      >
        <MaterialIcon fontSize="2rem">remove_circle</MaterialIcon>
      </Button>
      <input
        className={classes.ItemAmount}
        value={props.quantity}
        type='number'
        min={0}
        onChange={(e) => { console.log(+e.target.value); props.onCartItemSetQty(props.ingredients, +e.target.value) }}
      // onChange={(e) => { props.onCartItemSetQty(props.ingredients, +e.target.value ?? 0) }}
      />
      <Button
        width="2rem"
        variant="circular"
        onClick={() => props.onCartItemSetQty(props.ingredients, props.quantity + 1)}
      >
        <MaterialIcon fontSize="2rem">add_circle</MaterialIcon>
      </Button>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onCartItemSetQty: (ingredients: string, qty: number) => dispatch(cartItemSetQty({ ingredients: ingredients, qty: qty }))
  }
}

export default connect(null, mapDispatchToProps)(CartItemFooter);
