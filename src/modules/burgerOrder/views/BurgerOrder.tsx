import React, { Component } from 'react';
import { BurgerBuilder } from '../components';
import BurgerRecommendation from '../components/burgerRecommendation/BurgerRecommendation';

class BurgerOrder extends Component {
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <BurgerRecommendation />
        <BurgerBuilder />
      </div>
    )
  }
}

export default BurgerOrder
