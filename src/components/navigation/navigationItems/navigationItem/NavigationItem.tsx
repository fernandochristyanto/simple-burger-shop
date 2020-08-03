import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from '../../Navigation.module.css';

declare interface INavigationItemPops {
  children?: React.ReactNode,
  path: string,
}

const NavigationItem: React.FC<INavigationItemPops> = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink
        to={props.path}
        activeClassName={classes.Active}
      >
        {props.children}
      </NavLink>
    </li>
  )
}

export default NavigationItem
