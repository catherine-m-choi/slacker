import React from "react"

// import BillboardV1 from "./BillboardV1";
import BillboardV2 from "./BillboardV2";
import BannerCompanies from "./BannerCompanies";
import MainContent from "./MainContent";
import SplashStats from "./SplashStats";
import SplashCard from "./SplashCards";
import SplashBottomCTA from "./BottomCTA";
import SplashFooter from "./Footer";

function SplashLoggedOut(props) {
  return (
    <section className="Splash__body">
      <div className="BillboardV2__container">
        <BillboardV2 />
      </div>
      <BannerCompanies />
      <MainContent />
      <SplashStats />
      <SplashCard />
      <SplashBottomCTA />
      <SplashFooter />
  </section>
  )
}

export default SplashLoggedOut;