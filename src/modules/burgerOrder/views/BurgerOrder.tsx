import React, { Component } from 'react';
import { BurgerBuilder } from '../components';
import BurgerRecommendation from '../components/burgerRecommendation/BurgerRecommendation';

class BurgerOrder extends Component {
  render() {
    return (
      <div>
        <BurgerRecommendation />
        <BurgerBuilder />
      </div>
    )
  }
}

export default BurgerOrder
