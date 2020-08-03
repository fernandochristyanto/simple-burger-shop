import React, { Component } from 'react'
import { BreadTop, BreadBottom, Cheese, Tomato, Salad, Meat } from './ingredients';

import classes from './Burger.module.css';

declare interface IBurgerProps {
  width?: string;
  height?: string;
}

class Burger extends Component<IBurgerProps> {
  state = {
    ingredients: 'CSMT'
  };

  render() {
    const width = this.props.width ? this.props.width : this.props.height;
    const height = this.props.height ? this.props.height : this.props.width;

    return (
      <div className={classes.BurgerWrapper}>
        <div
          className={classes.Burger}
          style={{ width: width, height: height }}
        >
          <BreadTop />
          {this.state.ingredients.split('').map((ingredient, index) => {
            switch (ingredient) {
              case 'C':
                return <Cheese key={index} />;

              case 'S':
                return <Salad key={index} />;

              case 'M':
                return <Meat key={index} />;

              case 'T':
                return <Tomato key={index} />;

              default: return null;
            }
          })}
          <Tomato />
          <Salad />
          <Cheese />
          <Meat />
          <BreadBottom />
        </div>
      </div>
    )
  }
}

export default Burger
