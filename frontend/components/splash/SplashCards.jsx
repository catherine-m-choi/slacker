import React from "react";

function SplashCard(props) {
  return (
    <div className="SplashCard">
      <h3>Take a deeper dive into a new way to work</h3>
      <ul className="SplashCard__card-container">
        <li className="SplashCard__card">
          <div className="SplashCard__card-content">
            <img src={window.splash__card_01} />
            <p className="SplashCard__card-genre">Solutions</p>
            <h4 className="SplashCard__card-title">Learn how Slack can work for your team</h4>
          </div>
          <p className="SplashCard__card-footer">EXPLORE SOLUTIONS</p>
        </li>
        <li className="SplashCard__card">
          <div className="SplashCard__card-content">
            <img src={window.splash__card_02} />
            <p className="SplashCard__card-genre">Resource</p>
            <h4 className="SplashCard__card-title">An email veteran’s guide to Slack</h4>
          </div>
          <p className="SplashCard__card-footer">READ</p>
        </li>
        <li className="SplashCard__card">
          <div className="SplashCard__card-content">
            <img src={window.splash__card_03} />
            <p className="SplashCard__card-genre">Webinar</p>
            <h4 className="SplashCard__card-title">What is Slack?</h4>
          </div>
          <p className="SplashCard__card-footer">WATCH NOW</p>
        </li>
        <li className="SplashCard__card">
          <div className="SplashCard__card-content">
            <img src={window.splash__card_04} />
            <p className="SplashCard__card-genre">How-to</p>
            <h4 className="SplashCard__card-title">Start off on the right foot with Slack 101</h4>
          </div>
          <p className="SplashCard__card-footer">LEARN HOW</p>
        </li>
      </ul>
  </div>
  )
}

export default SplashCard;