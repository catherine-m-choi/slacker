import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../../util/route_utils'

import MainNavBarContainer from "./MainNavBarContainer";
import BillboardV1 from "./BillboardV1";
import BillboardV2 from "./BillboardV2";
import BannerCompanies from "./BannerCompanies";
import MainContent from "./MainContent";

const Splash = () => (
  <div className="Splash">
    {/* <h1>[Splash Component]</h1> */}
    <div className="Splash__nav-wrapper">
      <MainNavBarContainer />
      <div className="BillboardV2__background-decoration"></div>
    </div>

    <div className="Splash__body-container">
      <section className="Splash__body">
        {/* <BillboardV1 /> */}
        <div className="BillboardV2__container">
          <BillboardV2 />
        </div>
        <BannerCompanies />
        <MainContent />

        {/* Temp instead of React Components */}
        <div className="SplashStats"></div>
        <div className="SplashCards"></div>
        <div className="SplashBottomCTA"></div>
        <div className="Footer"></div>

      </section>
    </div>
  </div>
);

export default Splash;