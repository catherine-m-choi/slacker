import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router";
import { HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_utils'

import Splash from "./splash/Splash"
import App from "./App";
import LoginFormContainer from "./sessions/LoginFormContainer";
import SignupFormContainer from "./sessions/SignupFormContainer";

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Route exact path="/" component={Splash} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/app" component={App}/>
      </HashRouter>
    </Provider>
  )
};

export default Root;