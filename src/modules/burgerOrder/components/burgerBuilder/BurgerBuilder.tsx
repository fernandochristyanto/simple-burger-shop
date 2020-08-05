import React, { Component } from 'react'
import Burger from '../../../../components/burger/Burger'
import BuildControls from './buildControls/BuildControls'

class BurgerBuilder extends Component {
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <Burger />
        <BuildControls />
      </div>
    )
  }
}

export default BurgerBuilder;
