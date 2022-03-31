import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import MainSearchBar from "./MainSearchBar";

function AppTopNav(props) {
  
  const [showSearch, setShowSearch] = useState(false);
    
  const handleClick = (e) => {
    props.openRightSidebar({
      type: "Profile",
      user: props.currentUser
    }) 
  }

  let history = useHistory();
  
  return (
    <div className="AppTopNav__container">
      <div></div>
      <div className="AppTopNav__main">
        <div className="AppTopNav__nav-btns">
          <div>
            <i onClick={() => history.goBack()} className="material-icons-outlined">arrow_back</i>
          </div>
          <div>
            <i  onClick={() => history.goForward()} className="material-icons-outlined">arrow_forward</i>
          </div>
        </div>
        <div className="AppTopNav__search-bar" onClick={ () => setShowSearch(true)} >
          <span className="material-icons-outlined">search</span>
          <h3 >
            Search your workspace
          </h3>
        </div>
          { showSearch ? (<div className="SearchUsers__hidden-background" 
            onClick={() => setShowSearch(false)} >
          </div>
          ) : null }
          { showSearch ? (
            <MainSearchBar setShowSearch={setShowSearch} />
          ) : null }
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