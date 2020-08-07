import React, { Component } from 'react'
import { connect } from 'react-redux'

import Burger from '../../../../components/burger/Burger'
import BuildControls from './buildControls/BuildControls'
import classes from './BurgerBuilder.module.css'
import OrderControls from './orderControls/OrderControls'
import { IBurgerBuilderProps } from '../../interfaces'

class BurgerBuilder extends Component<IBurgerBuilderProps> {
  render() {
    return (
      <div className={classes.BurgerBuilder}>
        <Burger
          ingredients={this.props.burgerBuilder.res?.ingredients ?? ''}
          price={this.props.burgerBuilder.res?.price ?? 0}
          isBuilding={true}
        />
        <div className={classes.BuilderControler}>
          <BuildControls />
          <OrderControls />
        </div>
      </div >
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    burgerBuilder: state.burgerBuilder,
  }
}

export default connect(mapStateToProps)(BurgerBuilder);
