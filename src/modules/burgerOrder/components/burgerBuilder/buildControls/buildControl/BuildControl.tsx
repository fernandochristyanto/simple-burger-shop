import React from 'react';

import { Card, CardBody, CardTitle } from '../../../../../../components/card';
import { ingreidentDictionary, ingredientImages } from '../../../../../../constants';
import { connect } from 'react-redux';
import { addIngredient } from '../../../../redux/actions';
import classes from '../../BurgerBuilder.module.css';
import { IBuildControlProps } from '../../../../interfaces';

const BuildControl = (props: IBuildControlProps) => {
  return (
    <div className={classes.BuildControl} onClick={() => props.onAddIngredient(props.ingredient)}>
      <Card hoverable>
        <CardBody>
          <img src={ingredientImages[props.ingredient]} width="100%" height="100%" alt={ingreidentDictionary[props.ingredient]} />
          <CardTitle>
            {ingreidentDictionary[props.ingredient]}
          </CardTitle>
        </CardBody>
      </Card>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddIngredient: (ingredient: string) => dispatch(addIngredient(ingredient))
  }
}

export default connect(null, mapDispatchToProps)(BuildControl);
