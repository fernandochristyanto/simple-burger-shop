import React from 'react';

import { XScrollable, XScrollItem } from '../../../../components/scrollable';
import RecommendationCard from './recommendationCard/RecommendationCard';
import { burgerRecommendations } from '../../../../constants';

const BurgerRecommendation: React.FC = () => {
  return (
    <XScrollable>
      {burgerRecommendations.map((recommendation, index) => (
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
