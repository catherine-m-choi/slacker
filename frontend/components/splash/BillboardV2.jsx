import React from "react";
import { Link } from "react-router-dom";

function BillboardV2(props) {
  return (
    <div className="BillboardV2__content">
      {/* <div className="BillboardV2__background-decoration"></div> */}
      <header>
        <h1>Slack is your <span>digital HQ</span></h1>
        <p className="BillboardV2_header-copy">Transform the way you work with one place for everyone and everything you need to get stuff done.</p>
        <div className="BillboardV2__buttons btn">
          <Link to="/login"><button className="btn purple-solid" >LOG IN</button></Link>
          {/* <div className="SessionForm__oauth"> */}
          <div className="SessionForm__oauth">
            <a href="/users/auth/google_oauth2" data-method="POST" rel="nofollow">
              <button className="btn BillboardV2__oauth-btn">
                {/* <div className="Splash__google-logo-container"> */}
                  <img src={window.sessionForm__googleLogo} />
                {/* </div> */}
                SIGN UP WITH GOOGLE
              </button>
            </a>
          </div>

        </div>
      </header>
      <img src={splash__billboardHero2} alt="Team discussing work in the Slack app" />

    </div>
  )
}

export default BillboardV2;