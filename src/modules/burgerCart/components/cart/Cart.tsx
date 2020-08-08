import React from 'react'

import classes from './Cart.module.css';
import { Card, CardBody } from '../../../../components/card';
import Burger from '../../../../components/burger/Burger';
import IngredientCard from './ingredientCard/IngredientCard';

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
        {shoppingCart.map((item) => (
          <Card>
            <CardBody>
              <div style={{ display: 'flex' }}> {/* ITEM BODY */}
                <div style={{ height: '100%', width: '100px' }}>
                  <Burger
                    ingredients={item.burger.ingredients}
                    width="100px"
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '100%', paddingLeft: '10px' }}>
                  <IngredientCard ingredients={item.burger.ingredients} />
                  <div>
                    <div>${item.burger.burgerPrice}</div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex' }}> {/* ITEM FOOTER */}
              </div>
            </CardBody>
          </Card>
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
