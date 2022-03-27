import React from "react";

function Profile(props) {
  return (
    <div className="Profile" >
      <div className="ChatRoomInfo__container">
        <div className="ChatRoomInfo">
          <h3>Profile</h3>
          {/* <button onClick={props.closeRightSidebar} >Close me!</button> */}
          <span onClick={props.closeRightSidebar}  className="material-icons-outlined">close</span>
        </div>
      </div>

      <div className="ChatRoom__container">
        <img src={props.currentUser.profilePictureUrl} />
          <div className="Profile__name">{props.currentUser.displayName}</div>
          <div className="Profile__title">{props.currentUser.title}</div>
          <div className="Profile__status">On vacation</div>

        <ul className="Profile__buttons">
          <li>
            <span class="material-icons-outlined">sentiment_satisfied_alt</span>
            <div>Set status</div>
          </li>
          <li>
            <span class="material-icons-outlined">edit</span>
            <div>Edit profile</div>
          </li>
          <li>
            <span class="material-icons-outlined">settings</span>
            <div>Preferences</div>
          </li>
        </ul>

        {/* <br />
        <div>Local time: 12:23 AM</div> */}

        <ul className="Profile__details">
          <li>
            <span>Display name</span>
            <div>catherine.choi</div>
          </li>
          <li>
            <span>Local time</span>
            <div>3:54 AM3:54 AM</div>
          </li>
          <li>
            <span>Phone number</span>
            <div>(646) 416-3937</div>
          </li>
          <li>
            <span>Email address</span>
            <div>catherinemargaretchoi@gmail.com</div>
          </li>
          <li>
            <span>Location</span>
            <div>New York City</div>
          </li>
          <li>
            <span>Birthday</span>
            <div>February 23rd, 1994</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Profile;
