import React from 'react'

import classes from '../Cart.module.css';
import { Card, CardBody } from '../../../../../components/card';
import Burger from '../../../../../components/burger/Burger';
import IngredientCard from '../ingredientCard/IngredientCard';

declare interface ICartItem {
  ingredients: string
  price: number
}

const CartItem = (props: ICartItem) => {
  return (
    <Card>
      <CardBody>
        <div className={classes.CartItemBody} >
          <div style={{ height: '100%', width: '100px' }}>
            <Burger
              ingredients={props.ingredients}
              width="100px"
            />
          </div>
          <div className={classes.CartItemIngredient}>
            <IngredientCard ingredients={props.ingredients} />
            <div>
              <div>${props.price}</div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex' }}> {/* ITEM FOOTER */}
        </div>
      </CardBody>
    </Card>
  )
}

export default CartItem;
