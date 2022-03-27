import React from "react";

function AppTopNav(props) {

    
  const handleClick = (e) => {
    console.log("Opening profile!")
    props.openRightSidebar({
      type: "Profile",
      currentUser: props.currentUser
    }) 
  }
  
  return (
    <div className="AppTopNav__container">
      <h1>[Top Nav]<button onClick={ () => handleClick() } >Click me to see your profile</button></h1>
      <div>
        <img src={props.currentUser.profilePictureUrl} height="30px" width="30px" />
      </div>
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