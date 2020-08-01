import React, { Component, ReactNode } from 'react';
import { Switch, withRouter, RouteComponentProps } from 'react-router-dom';

import { defaultLayoutRoute } from '../../config/index';
import { connect } from 'react-redux';
import ProtectedRoute from '../protectedRoute/ProtectedRoute';
import { IAuth, IDefaultState } from '../../interfaces';

declare interface IDefaultLayoutProps extends RouteComponentProps {
  children?: ReactNode,
  auth: IDefaultState<IAuth>,
}

class DefaultLayout extends Component<IDefaultLayoutProps> {
  componentDidMount() {
    if (!this.props.auth.res) this.props.history.push('/login')
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          {defaultLayoutRoute.map((route, index) => (
            <ProtectedRoute
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
        Hello, {this.props.auth.res?.fullname}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(withRouter(DefaultLayout))
