import React from 'react';

import classes from '../BurgerBuilder.module.css';
import { XScrollable, XScrollItem } from '../../../../../components/scrollable';
import { ingredients } from '../../../../../constants';
import BuildControl from './buildControl/BuildControl';

const BuildControls: React.FC = (props) => {
  return (
    <div className={classes.BuildControls}>
      <XScrollable>
        {ingredients.map((ingredient, index) => (
          <XScrollItem key={index}>
            <BuildControl ingredient={ingredient} />
          </XScrollItem>
        ))}
      </XScrollable>
    </div>
  )
}

export default BuildControls;
