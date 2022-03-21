import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../../util/route_utils'

import MainNavBarContainer from "./MainNavBarContainer";
import BillboardV1 from "./BillboardV1";
import BillboardV2 from "./BillboardV2";
import BannerCompanies from "./BannerCompanies";
import MainContent from "./MainContent";
import SplashStats from "./SplashStats";
import SplashCard from "./SplashCards";
import SplashBottomCTA from "./BottomCTA";
import SplashFooter from "./Footer";

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
        <SplashStats />
        <SplashCard />
        <SplashBottomCTA />
        <SplashFooter />

        {/* Temp instead of React Components */}
        {/* <div className="SplashCards"><h2>Test</h2></div> */}
        {/* <div className="SplashBottomCTA"><h2>Test</h2></div> */}
        {/* <div className="Footer"><h2>Test</h2></div> */}

      </section>
    </div>
  </div>
);

export default Splash;