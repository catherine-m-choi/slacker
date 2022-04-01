import React from "react";
import { Link } from "react-router-dom";

function BillboardV2(props) {


  const displayButtons = (props.currentUser) ? (
    <div className="BillboardV2__buttons btn">
      <Link to="/welcome"><button className="btn purple-solid" >Launch Slack</button></Link>
    </div>
  ) : (
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
  )

  const handleLogout = () => {
    props.logout()
    if (props.location.pathname === "/welcome") {
      props.history.push("/")
      props.logout()
    } else {
      console.log("handling logout")
    }
  }

  return (
    <div className="BillboardV2__content">
      {/* <div className="BillboardV2__background-decoration"></div> */}
      <header>
        <h1>Slack is your <span>digital HQ</span></h1>
        <p className="BillboardV2_header-copy">Transform the way you work with one place for everyone and everything you need to get stuff done.</p>

        {displayButtons}
      </header>
      <img src={splash__billboardHero2} alt="Team discussing work in the Slack app" />

    </div>
  )
}

// export default BillboardV2;
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (user) => dispatch(logout(user))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BillboardV2));

