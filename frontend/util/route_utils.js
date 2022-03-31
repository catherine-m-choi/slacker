import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id),
  }
}

// <AuthRoute path="" component={} />
function Auth({ loggedIn, path, component: Component, fetchChannels}) {

  return (
    <Route 
      path={path} 
      render={ (props) => (
        loggedIn ? <Redirect to="/welcome" /> : <Component {...props} />
      )} 
    />
  )
}


// <ProtectedRoute path="" component={} />
const Protected = ({ loggedIn, path, component: Component}) => {
  return (
    <Route 
      path={path} 
      render={ (props) => (
        loggedIn ? <Component {...props} /> : <Redirect to="/" />
      )} 
    />
  )
}

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));