import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { nonLayoutRoute, DefaultLayout } from '../config/index';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>...Loading</div>}>
          <Switch>
            {nonLayoutRoute.map((route, index) => (
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

            <Route path="/" render={() => <DefaultLayout />} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
