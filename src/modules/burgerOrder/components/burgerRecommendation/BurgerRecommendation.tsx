import React from 'react';

import { XScrollable, XScrollItem, YScrollable, YScrollItem } from '../../../../components/scrollable';
import RecommendationCard from './recommendationCard/RecommendationCard';
import { burgerRecommendations } from '../../../../constants';
import classes from './BurgerRecommendation.module.css';

const BurgerRecommendation = () => {
  return (
    <React.Fragment>
      <div className={classes.VerticalRecommendation}>
        <YScrollable>
          {burgerRecommendations.map((recommendation, index) => (
            <YScrollItem key={index}>
              <RecommendationCard
                burgerName={recommendation.burgerName}
                ingredients={recommendation.ingredients}
              />
            </YScrollItem>
          ))}
        </YScrollable>
      </div>
      <div className={classes.HorizontalRecommendation}>
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
      </div>
    </React.Fragment>
  )
}

export default BurgerRecommendation;
