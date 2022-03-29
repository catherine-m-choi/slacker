import React from "react";
import { Link } from "react-router-dom";

function Profile(props) {
  return (
    <div className="Profile" >
      <div className="ChatRoomInfo__container">
        <div className="ChatRoomInfo">
          <h3>Profile</h3>
          <span onClick={props.closeRightSidebar}  className="material-icons-outlined">close</span>
        </div>
      </div>

      <div className="ChatRoom__container">
        <img src={props.user.profilePictureUrl} />
          <div className="Profile__name">{props.user.displayName}</div>
          <div className="Profile__title">{props.user.title}</div>
          <div className="Profile__status">On vacation</div>

        {(props.user.id === props.currentUserId) ? 
          <ul className="Profile__buttons">
            <li>
              <span className="material-icons-outlined">sentiment_satisfied_alt</span>
              <div>Set status</div>
            </li>
            <li>
              <span onClick={() => props.openModal("profile/edit") } className="material-icons-outlined">edit</span>
              <div>Edit profile</div>
            </li>
            <li>
              <span className="material-icons-outlined">settings</span>
              <div>Preferences</div>
            </li>
          </ul>
        : 
          <ul className="Profile__buttons">
            <Link to={{
              pathname: `/app/drafts`,
              recepientId: props.user.id
            }}>
              <li>
                <span className="material-icons-outlined">comment</span>
                <div>Message</div>
              </li>
            </Link>
          </ul>
        }

        <ul className="Profile__details">
          {props.user.username && 
          <li>
            <span>Username</span>
            <div>{props.user.username}</div>
          </li>
          }
          <li>
            <span>Local time</span>
            <div>3:54 AM</div>
          </li>
          {props.user.phone && 
            <li>
              <span>Phone number</span>
              <div>{`(${props.user.phone.slice(0, 3)}) ${props.user.phone.slice(3, 6)}-${props.user.phone.slice(6, 10)}`}</div>
            </li>
          }
          <li>
            <span>Email address</span>
            <div>{props.user.email}</div>
          </li>
          {props.user.location && 
          <li>
            <span>Location</span>
            <div>New York City - ADD TO DB</div>
          </li>
          }
          {props.user.birthday && 
          <li>
            <span>Birthday</span>
            <div>February 23rd, 1994 - ADD TO DB</div>
          </li>
          }
        </ul>
      </div>
    </div>
  )
}

// export default Profile;
import { openModal } from "../../actions/modal_actions";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);