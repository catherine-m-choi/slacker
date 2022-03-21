import React from "react";
import { Link } from "react-router-dom";

function BillboardV1(props) {
  return (
    <div className="BillboardV1__content">
      <header>
        <h1>Slack is your digital HQ</h1>
        <p className="BillboardV1_header-copy">Transform the way you work with one place for everyone and everything you need to get stuff done.</p>
        <div className="BillboardV1__buttons btn">
          <Link to="/login"><button className="btn purple-solid" >LOG IN</button></Link>
          {/* <div className="SessionForm__oauth"> */}
          <div className="SessionForm__oauth">
            <a href="/users/auth/google_oauth2" data-method="POST" rel="nofollow">
              <button className="btn BillboardV1__oauth-btn">
                <div className="Splash__google-logo-container">
                  <img src={window.sessionForm__googleLogo} />
                </div>
                SIGN UP WITH GOOGLE
              </button>
            </a>
          </div>

        </div>
      </header>
      <img src={splash__billboardHero} alt="Team discussing work in the Slack app" />

    </div>
  )
}

export default BillboardV1;