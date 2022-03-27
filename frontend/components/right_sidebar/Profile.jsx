import React from "react";

function Profile(props) {
  return (
    <div className="Thread" >
      <h2>PROFILE</h2>
      <button onClick={props.closeRightSidebar} >Close me!</button>
      <img src={props.currentUser.profilePictureUrl} />
      <ul>
        <li>{props.currentUser.displayName}</li>
        <li>{props.currentUser.title}</li>

        <button>Edit profile</button>
        <button>Set status</button>
        <button>Preferences</button>
      </ul>

      <br />
      <br />
      <div>Local time: 12:23 AM</div>
    </div>
  )
}

export default Profile;
