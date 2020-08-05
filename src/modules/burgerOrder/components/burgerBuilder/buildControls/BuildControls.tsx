import React from 'react';

import classes from '../BurgerBuilder.module.css';
import { XScrollable } from '../../../../../components/scrollable';
import { ingredients } from '../../../../../constants';
import BuildControl from './buildControl/BuildControl';

const BuildControls: React.FC = (props) => {
  return (
    <div className={classes.BuildControls}>
      <XScrollable>
        {ingredients.map((ingredient, index) => (
          <BuildControl ingredient={ingredient} key={index} />
        ))}
      </XScrollable>
    </div>
  )
}

export default BuildControls;
