import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute: React.FC<any> = (props) => {
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
