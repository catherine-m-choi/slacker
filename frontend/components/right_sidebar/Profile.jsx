import React, { useEffect } from "react";
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
        <img src={props.users[props.userId].profilePictureUrl} />
          <div className="Profile__name">{props.users[props.userId].displayName}</div>
          <div className="Profile__title">{props.users[props.userId].title}</div>
          <div className="Profile__status">On vacation</div>

        {(props.users[props.userId].id === props.currentUserId) ? 
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
              recepientId: props.users[props.userId].id
            }}>
              <li>
                <span className="material-icons-outlined">comment</span>
                <div>Message</div>
              </li>
            </Link>
          </ul>
        }

        <ul className="Profile__details">
          {props.users[props.userId].username && 
          <li>
            <span>Username</span>
            <div>{props.users[props.userId].username}</div>
          </li>
          }
          {/* <li>
            <span>Local time</span>
            <div>3:54 AM</div>
          </li> */}
          {props.users[props.userId].phone && 
            <li>
              <span>Phone number</span>
              {/* <div>{`(${props.users[props.userId].phone.slice(0, 3)}) ${props.users[props.userId].phone.slice(3, 6)}-${props.users[props.userId].phone.slice(6, 10)}`}</div> */}
              <div>{props.users[props.userId].phone}</div>
            </li>
          }
          <li>
            <span>Email address</span>
            <div>{props.users[props.userId].email}</div>
          </li>
          {props.users[props.userId].location && 
          <li>
            <span>Location</span>
            <div>New York City - ADD TO DB</div>
          </li>
          }
          {props.users[props.userId].birthday && 
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
    users: state.entities.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);