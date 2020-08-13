import React, { Component } from 'react'

import classes from './Cart.module.css';
import CartItem from './cartItem/CartItem';
import CheckoutPanel from './checkoutPanel/CheckoutPanel';
import Burger from '../../../../components/burger/Burger';
import { connect } from 'react-redux';
import { burgerCartFetch } from '../../redux/actions';
import { IDefaultState, IBurgerCart } from '../../../../interfaces';

declare interface ICartProps {
  burgerCart: IDefaultState<IBurgerCart>
  onBurgerCartFetch: () => Promise<void>
}

class Cart extends Component<ICartProps> {
  componentDidMount() {
    this.props.onBurgerCartFetch();
  }

  renderCart = () => {
    const { items, totalPrice } = this.props.burgerCart.res ?? {};
    const paddingSpace = 184.7 + (21.6 * (items ? items?.length : 0)) + 20;
    return (
      <div className={classes.CartWrapper} style={{ paddingBottom: paddingSpace }}>
        <div className={classes.Cart}>
          {items?.map((item, index) => (
            <CartItem
              key={index}
              ingredients={item.burger.ingredients}
              price={item.burger.price}
              quantity={item.quantity}
            />
          ))}
        </div>
        <CheckoutPanel shoppingCart={items} totalPrice={totalPrice} />
        <Burger ingredients="CS" />
        <Burger ingredients="CS" />
        <Burger ingredients="CS" />
        <Burger ingredients="CS" />
      </div>
    )
  }

  render() {
    return (
      this.props.burgerCart.res ? this.renderCart() : <div>Loading</div>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onBurgerCartFetch: () => dispatch(burgerCartFetch()),
  }
}

const mapStateToProps = (state: any) => {
  return {
    burgerCart: state.burgerCart,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
