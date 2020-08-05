import React from 'react';

import { XScrollItem } from '../../../../../../components/scrollable';
import { Card, CardBody, CardTitle } from '../../../../../../components/card';
import { ingreidentDictionary, ingredientImages } from '../../../../../../constants';

declare interface IBuildContrlProps {
  ingredient: string
}

const BuildControl: React.FC<IBuildContrlProps> = (props) => {
  return (
    <XScrollItem>
      <div style={{ width: '250px' }}>
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

export default BuildControl;
