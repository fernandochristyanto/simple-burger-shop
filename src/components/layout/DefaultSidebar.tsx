import React from 'react';

import classes from './Layout.module.css';
import Logo from '../logo/Logo';
import NavigationItems from '../navigation/navigationItems/NavigationItems';

declare interface ISidebarProps {
  isOpen?: boolean;
}

const DefaultSidebar: React.FC<ISidebarProps> = (props) => {
  const classNames = [classes.Sidebar, (props.isOpen ? classes.Open : '')];
  return (
    <div className={classNames.join(' ')}>
      <div className={classes.HeaderMenu}>
        <Logo />
      </div>
      <NavigationItems />
    </div>
  )
}

export default DefaultSidebar;
