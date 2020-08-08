import React from 'react'

import classes from '../../Cart.module.css';
import Burger from '../../../../../../components/burger/Burger';
import IngredientCard from '../../ingredientCard/IngredientCard';

declare interface ICartItemBody {
  ingredients: string
  price: number
}

const CartItemBody = (props: ICartItemBody) => {
  return (
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
  )
}

export default CartItemBody;
