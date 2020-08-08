import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from '../../Navigation.module.css';

declare interface INavigationItemPops {
  children?: React.ReactNode,
  path: string,
  sidebarToggle?: () => void,
}

const NavigationItem = (props: INavigationItemPops) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink
        to={props.path}
        activeClassName={classes.Active}
        onClick={() => props.sidebarToggle && props.sidebarToggle()}
      >
        {props.children}
      </NavLink>
    </li>
  )
}

export default NavigationItem
