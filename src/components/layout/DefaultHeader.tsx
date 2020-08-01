import React, { Component } from 'react';

import classes from './Layout.module.css';
import Logo from '../logo/Logo';
import NavigationBar from '../navigation/navigationBar/NavigationBar';

class DefaultHeader extends Component {
  render() {
    return (
      <header className={classes.Header}>
        <div className={classes.Container}>
          <div className={classes.HeaderMenu}>
            <Logo />
            <NavigationBar />
          </div>
        </div>
      </header>
    )
  }
}

export default DefaultHeader
