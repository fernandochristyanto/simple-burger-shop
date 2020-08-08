import React from 'react';

import classes from '../Navigation.module.css';
import NavigationItem from './navigationItem/NavigationItem';
import { navigationMenus } from '../../../config'

declare interface INavigationItemsProps {
  sidebarToggle?: () => void
}

const NavigationItems = (props: INavigationItemsProps) => {
  return (
    <ul className={classes.NavigationItems}>
      {navigationMenus.map((menu, index) => (
        <NavigationItem
          key={index}
          path={menu.path}
          sidebarToggle={props.sidebarToggle}
        >{menu.title}</NavigationItem>
      ))}
    </ul>
  )
}

export default NavigationItems;
