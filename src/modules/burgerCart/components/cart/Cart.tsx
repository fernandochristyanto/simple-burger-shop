import React from 'react'

import classes from './Cart.module.css';
import { Card, CardBody } from '../../../../components/card';
import CartItem from './cartItem/CartItem';

const shoppingCart = [
  {
    burger: {
      ingredients: 'TCMS',
      burgerPrice: 4.80
    },
    quantity: 1,
    itemPrice: 4.80
  },
  {
    burger: {
      ingredients: 'SCMCM',
      burgerPrice: 5.70
    },
    quantity: 2,
    itemPrice: 11.40
  }
];

const Cart = () => {
  return (
    <div className={classes.CartWrapper}>
      <div className={classes.Cart}>
        {shoppingCart.map((item, index) => (
          <CartItem
            key={index}
            ingredients={item.burger.ingredients}
            price={item.burger.burgerPrice}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div className={classes.CheckoutPanel}>
        <Card>
          <CardBody>
            Ini CheckoutPanel
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Cart;
