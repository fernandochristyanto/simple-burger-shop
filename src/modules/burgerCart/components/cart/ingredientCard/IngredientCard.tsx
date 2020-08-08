import React from 'react';

import classes from '../Cart.module.css';
import { ingreidentDictionary } from '../../../../../constants';

declare interface IIngredientCard {
  ingredients: string
}

const IngredientCard = (props: IIngredientCard) => {
  let ingredients: { [key: string]: number } = {};
  props.ingredients.split('').forEach((ingredient) => {
    ingredients[ingredient] ? ingredients[ingredient] += 1 : ingredients[ingredient] = 1;
  })

  return (
    <div className={classes.IngredientCardWrapper}>
      {Object.keys(ingredients).map((ingredient) => (
        <div className={classes.IngredientCard} key={ingredient}>
          {ingreidentDictionary[ingredient] + (ingredients[ingredient] > 1 ? ` X${ingredients[ingredient]}` : '')}
        </div>
      ))}
    </div>
  )
}

export default IngredientCard;
