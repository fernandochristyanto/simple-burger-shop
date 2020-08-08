import React from 'react';

import classes from './Layout.module.css';
import Logo from '../logo/Logo';
import NavigationItems from '../navigation/navigationItems/NavigationItems';

declare interface ISidebarProps {
  isOpen?: boolean;
  sidebarToggle: () => void;
}

const DefaultSidebar = (props: ISidebarProps) => {
  const classNames = [classes.Sidebar, (props.isOpen ? classes.Open : '')];
  return (
    <div className={classNames.join(' ')}>
      <div className={classes.HeaderMenu}>
        <Logo />
      </div>
      <NavigationItems sidebarToggle={props.sidebarToggle} />
    </div>
  )
}

export default DefaultSidebar;
