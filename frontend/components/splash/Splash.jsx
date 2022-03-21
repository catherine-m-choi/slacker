import React from "react";

import MainNavBarContainer from "./MainNavBarContainer";
import SplashLoggedIn from "./SplashLoggedIn";
import SplashLoggedOut from "./SplashLoggedOut";

const Splash = (props) => (
  <div className={`Splash ${(props.currentUser) ? "logged-in" : "logged-out"}`}>
    <div className="Splash__nav-wrapper">
      <MainNavBarContainer />
      <div className="BillboardV2__background-decoration"></div>
    </div>

    
    <div className="Splash__body-container">
      {(props.currentUser) ? (<SplashLoggedIn currentUser={props.currentUser} />) : (<SplashLoggedOut />)}
    </div>
  </div>
);

export default Splash;