import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { defaultLayoutRoute } from '../../config/index';

class DefaultLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          {defaultLayoutRoute.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              name={route.name}
              render={(props: any) => (
                <route.component {...props} />
              )}
            />
          ))}
        </Switch>
      This is default Layout
      </React.Fragment>
    )
  }
}

export default DefaultLayout
