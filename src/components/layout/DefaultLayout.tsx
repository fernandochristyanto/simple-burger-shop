import React, { Component } from 'react';
import { Switch, withRouter, RouteComponentProps } from 'react-router-dom';

import classes from './Layout.module.css';
import { defaultLayoutRoute } from '../../config/index';
import { connect } from 'react-redux';
import ProtectedRoute from '../protectedRoute/ProtectedRoute';
import { IAuth, IDefaultState } from '../../interfaces';
import DefaultHeader from './DefaultHeader';
import DefaultSidebar from './DefaultSidebar';
import HamburgerButton from '../hamburgerButton/HamburgerButton';

declare interface IDefaultLayoutProps extends RouteComponentProps {
  auth: IDefaultState<IAuth>,
}

class DefaultLayout extends Component<IDefaultLayoutProps> {
  state = {
    sideBarOpen: false,
  };

  componentDidMount() {
    // if (!this.props.auth.res) this.props.history.push('/login')
  }

  toggleSideBar = () => {
    this.setState({ sideBarOpen: !this.state.sideBarOpen });
  }

  render() {
    return (
      <React.Fragment>
        <DefaultHeader />
        <HamburgerButton
          isOpen={this.state.sideBarOpen}
          onClick={this.toggleSideBar}
        />
        <main className={classes.ComponentWrapper}>
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
        </main>
        <DefaultSidebar isOpen={this.state.sideBarOpen} />
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
