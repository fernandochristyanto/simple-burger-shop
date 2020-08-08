import React, { Component } from 'react';
import { BurgerBuilder, BurgerRecommendation } from '../components';

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
