import React from 'react'

import classes from './Cart.module.css';
import CartItem from './cartItem/CartItem';
import CheckoutPanel from './checkoutPanel/CheckoutPanel';
import Burger from '../../../../components/burger/Burger';
import { connect } from 'react-redux';
import { burgerCartFetch } from '../../redux/actions';

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
  },
  {
    burger: {
      ingredients: 'TSCM',
      burgerPrice: 4.80
    },
    quantity: 10,
    itemPrice: 48.00
  },
  {
    burger: {
      ingredients: 'SM',
      burgerPrice: 4.00
    },
    quantity: 5,
    itemPrice: 20.00
  },
  {
    burger: {
      ingredients: 'TCMCMS',
      burgerPrice: 6.0
    },
    quantity: 12,
    itemPrice: 72.00
  }
];

declare interface ICartProps {
  onBurgerCartFetch: () => Promise<void>
}

const Cart = (props: ICartProps) => {
  props.onBurgerCartFetch();
  const paddingSpace = 184.7 + (21.6 * shoppingCart.length) + 20;
  return (
    <div className={classes.CartWrapper} style={{ paddingBottom: paddingSpace }}>
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
      <CheckoutPanel shoppingCart={shoppingCart} />
      <Burger ingredients="CS" />
      <Burger ingredients="CS" />
      <Burger ingredients="CS" />
      <Burger ingredients="CS" />
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onBurgerCartFetch: () => dispatch(burgerCartFetch()),
  }
}

export default connect(null, mapDispatchToProps)(Cart);
