import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../../util/route_utils'

import MainNavBarContainer from "./MainNavBarContainer";
import SplashLoggedIn from "./SplashLoggedIn";
import SplashLoggedOut from "./SplashLoggedOut";

const Splash = (props) => (
  <div className="Splash">
    <div className="Splash__nav-wrapper">
      <MainNavBarContainer />
      <div className="BillboardV2__background-decoration"></div>
    </div>

    
    <div className="Splash__body-container">
      {(props.currentUser) ? (<SplashLoggedIn />) : (<SplashLoggedOut />)}
    </div>
  </div>
);

export default Splash;