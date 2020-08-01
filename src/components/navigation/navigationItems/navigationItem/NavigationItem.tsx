import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from '../../Navigation.module.css';

const NavigationItem: React.FC = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink
        to="/login"
        activeClassName={classes.Active}
      >
        {props.children}
      </NavLink>
    </li>
  )
}

export default NavigationItem
