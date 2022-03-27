import React from "react";

function AppTopNav(props) {

    
  const handleClick = (e) => {
    console.log("Opening profile!")
    props.openRightSidebar({
      type: "Profile",
      user: props.currentUser
    }) 
  }
  
  return (
    <div className="AppTopNav__container">
      <div></div>
      <div className="AppTopNav__main">
        <div className="AppTopNav__nav-btns">
          <div>
            <i className="material-icons-outlined">arrow_back</i>
          </div>
          <div>
            <i className="material-icons-outlined">arrow_forward</i>
          </div>
        </div>
        <div className="AppTopNav__search-bar">
          <span class="material-icons-outlined">search</span>
          <h3>
            Search your workspace
          </h3>
        </div>
      </div>
      <img onClick={ () => handleClick() } className="AppTopNav__profile" src={props.currentUser.profilePictureUrl} />
    </div>
  )
}

// export default AppTopNav;

import { connect } from "react-redux";
import { openRightSidebar } from "../../actions/right_sidebar_actions";

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    rightSidebar: state.ui.rightSidebar,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openRightSidebar: (sidebarInfo) => dispatch(openRightSidebar(sidebarInfo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppTopNav)