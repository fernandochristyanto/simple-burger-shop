import React from 'react';

import classes from '../Navigation.module.css';
import NavigationItems from '../navigationItems/NavigationItems';

const NavigationBar = () => {
  return (
    <nav className={classes.NavigationBar}>
      <NavigationItems />
    </nav>
  )
}

export default NavigationBar;
