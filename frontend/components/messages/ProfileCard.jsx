import React from "react";
import { Link } from "react-router-dom";

function ProfileCard(props) {
  return (
    <div className="ProfileCard" >
      <div className="ChatRoomInfo__container">
        <div className="ChatRoomInfo">
          <h3>ProfileCard</h3>
          <span onClick={props.closeRightSidebar}  className="material-icons-outlined">close</span>
        </div>
      </div>

      <div className="ChatRoom__container">
        <img src={props.user.profilePictureUrl} />
          <div className="ProfileCard__name">{props.user.displayName}</div>
          <div className="ProfileCard__title">{props.user.title}</div>
          <div className="ProfileCard__status">On vacation</div>

        {(props.user.id === props.currentUserId) ? 
          <ul className="ProfileCard__buttons">
            <li>
              <span className="material-icons-outlined">sentiment_satisfied_alt</span>
              <div>Set status</div>
            </li>
            <li>
              <span className="material-icons-outlined">edit</span>
              <div>Edit profile</div>
            </li>
          </ul>
        : 
          <ul className="ProfileCard__buttons">
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

      </div>
    </div>
  )
}


import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id,
  }
}

export default connect(mapStateToProps, null)(ProfileCard);