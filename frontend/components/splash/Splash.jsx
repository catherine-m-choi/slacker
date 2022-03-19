import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../../util/route_utils'

import MainNavBarContainer from "./MainNavBarContainer";

const Splash = () => (
  <div>
    <h1>[Splash Component]</h1>
    <nav className="Splash__nav">
      <MainNavBarContainer />
    </nav>
  </div>
);

export default Splash;