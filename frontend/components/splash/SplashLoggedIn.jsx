import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SplashBottomCTA from "./BottomCTA";
import SplashFooter from "./Footer";

function SplashLoggedIn(props) {

  const [defaultChannel, setDefaultChannel] = useState("")
  
  useEffect(() => {
    // props.fetchUsers();
    // props.fetchMessagesDB();
    // props.fetchSavedMessages();
    props.fetchChannels()
      .then( (res) => {
        setDefaultChannel(Object.keys(res.payload)[0])
      })
    ;
  }, [])

  return (
    <div className="SplashLoggedIn__container">
      <div className="SplashLoggedIn">
        <div className="SplashLoggedIn__content">
          <h1>Welcome Back!</h1>
          <div className="SplashLoggedIn__workspaces-cards">
            <p className="SplashLoggedIn__workspaces-current-user">Workspaces for {props.currentUser.displayName}</p>
            <div className="SplashLoggedIn__workspaces-cards-content">
              {/* <img className="SplashLoggedIn__workspace-img" src="https://cdn.shopify.com/s/files/1/0115/8272/products/parks-and-rec-pawnee-logo-sticker-only-papersalt-998610_1024x1024.jpg?v=1616791450" alt="Workspace logo" /> */}
              <img className="SplashLoggedIn__workspace-img" src="https://previews.123rf.com/images/lyulka12/lyulka122003/lyulka12200300035/141391258-trendy-duotone-blue-pink-paper-background-as-a-symbol-of-yin-and-yang-placeholder-mockup-for-product.jpg" alt="Workspace logo" />
              <div className="SplashLoggedIn__workspaces-content">
                <div className="SplashLoggedIn__workspace-info">
                  <div className="SplashLoggedIn__workspace-name">Parks Department of Pawnee</div>
                  <div className="SplashLoggedIn__workspace-members">46 members</div>
                </div>
                {/* Change this to whatever the #general channel is for production  */}
                <Link to={`/app/channels/${defaultChannel}`}>
                  <button className="purple-solid btn">LAUNCH SLACK</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <SplashFooter />
      </div>
    </div>
  )
}

import { connect } from "react-redux";
// import { fetchUsers } from "../../actions/user_actions";
// import { fetchMessagesDB, fetchSavedMessages } from "../../actions/message_actions";
import { fetchChannels } from "../../actions/channel_actions";

const mapDispatchToProps = dispatch => {
  return {
    // fetchUsers: () => dispatch(fetchUsers()),
    // fetchMessagesDB: () => dispatch(fetchMessagesDB()),
    // fetchConvos: () => dispatch(fetchConvos()),
    fetchChannels: () => dispatch(fetchChannels()),
    // fetchSavedMessages: () => dispatch(fetchSavedMessages()),
  }
}


export default connect(null, mapDispatchToProps)(SplashLoggedIn);