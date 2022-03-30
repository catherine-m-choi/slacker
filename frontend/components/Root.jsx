import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router";
import { HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_utils'

import SplashContainer from "./splash/SplashContainer";
import App from "./App";
import LoginFormContainer from "./sessions/LoginFormContainer";
import SignupFormContainer from "./sessions/SignupFormContainer";
import Welcome from "./splash/Welcome";
import NoMatch from "./messages/NoMatch";

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Route exact path="/" >
          <SplashContainer />
        </Route>
        <Route exact path="/welcome" >
          <Welcome />
        </Route>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/app" component={App}/>
        {/* <Route path="/*" component={NoMatch} /> */}
      </HashRouter>
    </Provider>
  )
};

export default Root;