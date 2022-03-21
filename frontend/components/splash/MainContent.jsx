import React from "react";

function MainContent(props) {

  return (

    <div className="MainContent">
      <section className="MainContent__section">
        <video className="MainContent__video-left" src={window.splash__content_01_v2} autoPlay loop muted playsInline />
        <div className="MainContent__section-copy">
          <h2>Work more closely with partners</h2>
          <p>Break down barriers between you and your partners by working together in Slack—even if your partners work at other companies.</p>
        </div>
      </section>

      <section className="MainContent__section">
        <div className="MainContent__section-copy">
          <h2>Move faster with organized conversations</h2>
          <p>With channels, there’s a space for every project. You don’t have to think twice about where to go to ask a question or make a decision.</p>
        </div>
        <video className="MainContent__video-right" src={window.splash__content_02_v2} autoPlay loop muted playsInline />
      </section>
    </div>
  )

}

export default MainContent