import React from 'react';

import classes from '../BurgerRecommendation.module.css';
import { Card, CardTitle, CardBody } from '../../../../../components/card';
import Burger from '../../../../../components/burger/Burger';
import { ingreidentDictionary } from '../../../../../constants';
import { connect } from 'react-redux';
import { setIngredients } from '../../../redux/actions';
import { IRecommendationCardProps } from '../../../interfaces';

const RecommendationCard = (props: IRecommendationCardProps) => {
  let ingredients: { [key: string]: number } = {};
  props.ingredients.split('').map((ingredient) => (
    ingredients[ingredient] ? ingredients[ingredient] += 1 : ingredients[ingredient] = 1
  ));

  return (
    <div onClick={() => props.onSetIngredients(props.ingredients)}>
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
    </div>
  )
}

const mapDispatchToProps = (dipsatch: any) => {
  return {
    onSetIngredients: (ingredients: string) => dipsatch(setIngredients(ingredients)),
  }
}

export default connect(null, mapDispatchToProps)(RecommendationCard);
