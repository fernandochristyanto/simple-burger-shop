import React from 'react'

import classes from '../Burger.module.css';

declare interface IIngredientProps {
  ingredient: string;
  index: number;
  isBuilding?: boolean;
  onRemoveIngredient?: ((index: number) => Promise<void>) | null;
}

const classPicker = (ingredient: string) => {
  switch (ingredient) {
    case 'C':
      return classes.Cheese;

    case 'S':
      return classes.Salad;

    case 'T':
      return classes.Tomato;

    case 'M':
      return classes.Meat;

    default: return '';
  }
}

const Ingredient = (props: IIngredientProps) => {
  const classNames = [props.isBuilding ? classes.Ingredient : '', classPicker(props.ingredient)];
  return (
    <div
      className={classNames.join(' ')}
      onClick={() => props.onRemoveIngredient && props.onRemoveIngredient(props.index)}
    ></div>
  )
}

export default Ingredient;
