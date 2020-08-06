import React from 'react';

import { XScrollItem } from '../../../../../../components/scrollable';
import { Card, CardBody, CardTitle } from '../../../../../../components/card';
import { ingreidentDictionary, ingredientImages } from '../../../../../../constants';
import { connect } from 'react-redux';
import { addIngredient } from '../../../../redux/actions';

declare interface IBuildContrlProps {
  ingredient: string;
  onAddIngredient: (ingredient: string) => Promise<void>;
}

const BuildControl: React.FC<IBuildContrlProps> = (props) => {
  return (
    <XScrollItem>
      <div style={{ width: '250px' }} onClick={() => props.onAddIngredient(props.ingredient)}>
        <Card>
          <CardBody>
            <img src={ingredientImages[props.ingredient]} width="100%" height="100%" alt={ingreidentDictionary[props.ingredient]} />
            <CardTitle>
              {ingreidentDictionary[props.ingredient]}
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    </XScrollItem>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddIngredient: (ingredient: string) => dispatch(addIngredient(ingredient))
  }
}

export default connect(null, mapDispatchToProps)(BuildControl);
