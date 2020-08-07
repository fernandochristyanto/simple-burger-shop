import React from 'react';

import classes from '../Navigation.module.css';
import NavigationItem from './navigationItem/NavigationItem';
import { navigationMenus } from '../../../config'

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      {navigationMenus.map((menu, index) => (
        <NavigationItem key={index} path={menu.path} >{menu.title}</NavigationItem>
      ))}
    </ul>
  )
}

export default NavigationItems;
