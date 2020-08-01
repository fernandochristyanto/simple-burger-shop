import React from 'react';

import classes from '../Navigation.module.css';
import NavigationItem from './navigationItem/NavigationItem';

const NavigationItems: React.FC = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem>Order Burger</NavigationItem>
      <NavigationItem>Purchase History</NavigationItem>
      <NavigationItem>Logout</NavigationItem>
    </ul>
  )
}

export default NavigationItems;
