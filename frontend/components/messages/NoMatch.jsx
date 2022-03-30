import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function NoMatch(props) {
  return (
    <div className={`NoMatch ${(props.location.pathname.includes("/app")) ? "app" : null }`} >
      {(props.location.pathname.includes("/app")) ? null : (
        <div className="SessionForm__center-col"><Link to="/"><img src={window.sessionForm__slackLogo} /></Link></div>
      )}
      <div className="NoMatch__content" >
        <h2>
          <span className="material-icons-outlined">
            report_problem
          </span>
          <div>
            There’s been a glitch…
          </div>
        </h2>
        <p>We’re not quite sure what went wrong. You can go back, or try emailing <a href="mailto:catherinechoi561@gmail.com?subject=Slacker-404">Catherine</a> if you need a hand.</p>
      </div>
    </div>
  )
}

export default withRouter(NoMatch);