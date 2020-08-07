import React, { Component } from 'react'
import { BreadTop, BreadBottom, Ingredient } from './ingredients';

import classes from './Burger.module.css';
import { connect } from 'react-redux';
import { removeIngredient } from '../../modules/burgerOrder/redux/actions';

declare interface IBurgerProps {
  ingredients?: string;
  width?: string;
  height?: string;
  isBuilding?: boolean;
  onRemoveIngredient: (index: number) => Promise<void>;
}

class Burger extends Component<IBurgerProps> {
  render() {
    const ingredients = this.props.ingredients ? this.props.ingredients : '';
    const width = this.props.width ? this.props.width : this.props.height;
    const height = this.props.height ? this.props.height : this.props.width;

    return (
      <div className={classes.BurgerWrapper}>
        <div
          className={classes.Burger}
          style={{ width: width, height: height }}
        >
          <BreadTop />
          {ingredients ?
            ingredients.split('').map((ingredient, index) => (
              <Ingredient
                key={index}
                ingredient={ingredient}
                index={index}
                onRemoveIngredient={this.props.isBuilding ? this.props.onRemoveIngredient : null}
                isBuilding={this.props.isBuilding}
              />
            )) : <p>Please add ingredients!</p>
          }
          <BreadBottom />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onRemoveIngredient: (index: number) => dispatch(removeIngredient(index))
  }
}

export default connect(null, mapDispatchToProps)(Burger);
