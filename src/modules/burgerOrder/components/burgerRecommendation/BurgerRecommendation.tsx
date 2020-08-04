import React from 'react';

import { XScrollable, XScrollItem } from '../../../../components/scrollable';
import RecommendationCard from './recommendationCard/RecommendationCard';

const recommendations = [
  { ingredients: 'CMS', burgerName: 'Standard' },
  { ingredients: 'SCMCM', burgerName: 'Double cheese burger' },
  { ingredients: 'TSCM', burgerName: 'Complete' },
  { ingredients: 'TSCM', burgerName: 'Complete' },
  { ingredients: 'TSCM', burgerName: 'Complete' },
  { ingredients: 'TSCM', burgerName: 'Complete' },
];

const BurgerRecommendation: React.FC = () => {
  return (
    <XScrollable>
      {recommendations.map((recommendation, index) => (
        <XScrollItem key={index}>
          <RecommendationCard
            burgerName={recommendation.burgerName}
            ingredients={recommendation.ingredients}
          />
        </XScrollItem>
      ))}
    </XScrollable>
  )
}

export default BurgerRecommendation;
