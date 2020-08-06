import React from 'react';

import classes from '../BurgerRecommendation.module.css';
import { Card, CardTitle, CardBody } from '../../../../../components/card';
import Burger from '../../../../../components/burger/Burger';
import { ingreidentDictionary } from '../../../../../constants';

declare interface IRecommendationCardProps {
  burgerName: string;
  ingredients: string;
}

const RecommendationCard: React.FC<IRecommendationCardProps> = (props) => {
  let ingredients: { [key: string]: number } = {};
  props.ingredients.split('').map((ingredient) => (
    ingredients[ingredient] ? ingredients[ingredient] += 1 : ingredients[ingredient] = 1
  ));

  return (
    <Card width="300px" hoverable>
      <CardBody>
        <Burger width="100px" ingredients={props.ingredients} />
        <CardTitle>{props.burgerName}</CardTitle>
        <div className={classes.Ingredients}>
          {Object.keys(ingredients).map((ingredient, index) => (
            <div
              className={classes.IngredientCard}
              key={index}
            >
              {ingreidentDictionary[ingredient] + (ingredients[ingredient] > 1 ? ` X${ingredients[ingredient]}` : '')}
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}

export default RecommendationCard;
