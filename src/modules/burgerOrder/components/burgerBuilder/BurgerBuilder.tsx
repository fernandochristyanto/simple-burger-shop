import React, { Component } from 'react'
import { connect } from 'react-redux'

import Burger from '../../../../components/burger/Burger'
import BuildControls from './buildControls/BuildControls'
import { IDefaultState, IBurgerBuilder } from '../../../../interfaces'
import classes from './BurgerBuilder.module.css'
import OrderControls from './orderControls/OrderControls'

declare interface IBurgerBuilderProps {
  children?: React.ReactNode;
  burgerBuilder: IDefaultState<IBurgerBuilder>;
}

class BurgerBuilder extends Component<IBurgerBuilderProps> {
  render() {
    return (
      <div className={classes.BurgerBuilder}>
        <Burger
          ingredients={this.props.burgerBuilder.res?.ingredients}
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
