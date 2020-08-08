import React from 'react'

import classes from '../../Cart.module.css';
import Button from '../../../../../../components/button/Button';
import MaterialIcon from '../../../../../../components/materialIcon/MaterialIcon';

declare interface ICartItemFooter {
  quantity: number
}

const CartItemFooter = (props: ICartItemFooter) => {
  return (
    <div className={classes.CartItemFooter}>
      <Button
        width="2rem"
        variant="circular"
        disabled={props.quantity === 1}
      >
        <MaterialIcon fontSize="2rem">remove_circle</MaterialIcon>
      </Button>
      <input className={classes.ItemAmount} value={props.quantity} />
      <Button
        width="2rem"
        variant="circular"
      >
        <MaterialIcon fontSize="2rem">add_circle</MaterialIcon>
      </Button>
    </div>
  )
}

export default CartItemFooter;
