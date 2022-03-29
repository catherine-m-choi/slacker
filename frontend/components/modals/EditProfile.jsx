import React, { useState } from "react";

function EditProfile({currentUser, updateUser}) {

  const [email, setEmail] = useState(currentUser.email);
  const [username, setUsername] = useState(currentUser.username);
  const [title, setTitle] = useState(currentUser.title);
  const [phone, setPhone] = useState(currentUser.phone);
  const [displayName, setDisplayName] = useState(currentUser.displayName);
  const [profilePic, setProfilePic] = useState(currentUser.profilePictureUrl);

  const handleSubmit = e => {
    e.preventDefault();

    const updatedDetails = {
      id: currentUser.id,
      email: email,
      username: username,
      title: title,
      phone: phone,
      display_name: displayName,
      profile_picture_url: profilePic
    }

    updateUser(updatedDetails)
  }

  const update = (field) => {
    switch (field) {
      case "email":
        return (e) => setEmail(e.currentTarget.value);
      case "username":
        return (e) => setUsername(e.currentTarget.value);
      case "title":
        return (e) => setTitle(e.currentTarget.value);
      case "phone":
        return (e) => setPhone(e.currentTarget.value);
      case "displayName":
        return (e) => setDisplayName(e.currentTarget.value);
      case "profilePic":
        return (e) => setProfilePic(e.currentTarget.value);
      default:
        break;
    }
  }
  
  return (
    <div>Edit Profile
      <form onSubmit={handleSubmit} >
        <label htmlFor="edit-email">Email: </label>
        <input type="email" id="edit-email" value={email} onChange={update("email")} required />

        <br />

        <label htmlFor="edit-display-name">Display name: </label>
        <input type="text" id="edit-display-name" value={displayName} onChange={update("displayName")} required />

        <br />

        <label htmlFor="edit-title">Title: </label>
        <input type="text" id="edit-title" value={title} onChange={update("title")} />

        <br />

        <label htmlFor="edit-username">Username: </label>
        <input type="text" id="edit-username" value={username} onChange={update("username")} required />

        <br />

        <label htmlFor="edit-phone">Phone number: </label>
        <input type="tel" id="edit-phone" value={phone} onChange={update("phone")} />

        <br />

        <label htmlFor="edit-profile-pic">Profile pic url: </label>
        <input type="url" id="edit-profile-pic" value={profilePic} onChange={update("profilePic")} />

        <br />

        {/* <input type="submit" value="submit" /> */}
        <button type="submit" >Update your profile details</button>
      </form>
    </div>
  )
}

// export default EditProfile;

import { connect } from "react-redux";
import { updateUser } from "../../actions/user_actions";

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id],
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (user) => dispatch(updateUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);