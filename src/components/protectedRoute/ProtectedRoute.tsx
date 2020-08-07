import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { IAuth, IDefaultState } from '../../interfaces'

declare interface IProtectedRouteProps extends RouteProps {
  name: string
  auth: IDefaultState<IAuth>
}

const ProtectedRoute = (props: IProtectedRouteProps) => {
  // if (!props.auth.res) return <Redirect to="/login" />
  return (
    <Route
      {...props}
    />
  )
}

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(ProtectedRoute);
