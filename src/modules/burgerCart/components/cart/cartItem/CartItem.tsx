import React from 'react'

import classes from '../Cart.module.css';
import { Card, CardBody } from '../../../../../components/card';
import CartItemBody from './cartItemBody/CartItemBody';
import CartItemFooter from './cartItemFooter/CartItemFooter';

declare interface ICartItem {
  ingredients: string
  price: number
  quantity: number
}

const CartItem = (props: ICartItem) => {
  return (
    <div className={classes.CartItem}>
      <Card borderless>
        <CardBody>
          <CartItemBody
            ingredients={props.ingredients}
            price={props.price}
          />

          <CartItemFooter
            quantity={props.quantity}
          />
        </CardBody>
      </Card>
    </div>
  )
}

export default CartItem;
