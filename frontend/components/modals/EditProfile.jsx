import React, { useState } from "react";

function EditProfile({currentUser, updateUser, closeModal}) {

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

    updateUser(updatedDetails).then( () => closeModal() )
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
    <>
      <h3>Edit your profile</h3>
      <form onSubmit={handleSubmit} >
        <div className="EditProfile__left">

          <div>
            <label htmlFor="edit-display-name">Display name: </label>
            <input type="text" id="edit-display-name" value={displayName} onChange={update("displayName")} required />
            <p>This could be your first name, or a nickname — however you’d like people to refer to you in Slack.</p>
          </div>

          <div>
            <label htmlFor="edit-title">Title: </label>
            <input type="text" id="edit-title" value={title} onChange={update("title")} />
            <p>Let people know what you do at Parks and Recreation.</p>
          </div>

          <div>
            <label htmlFor="edit-username">Username: </label>
            <input type="text" id="edit-username" value={username} onChange={update("username")} required />
          </div>

          <div>
            <label htmlFor="edit-phone">Phone number: </label>
            <input type="tel" id="edit-phone" value={phone} onChange={update("phone")} />
            <p>Enter a phone number.</p>
          </div>

          <div>
            <label htmlFor="edit-email">Email: </label>
            <input type="email" id="edit-email" value={email} onChange={update("email")} required />
          </div>
        </div>

        <div className="EditProfile__right">
          <img src={currentUser.profilePictureUrl} />
          <label htmlFor="edit-profile-pic">Enter photo url: </label>
          <input type="url" id="edit-profile-pic" value={profilePic} onChange={update("profilePic")} />
        </div>

      </form>
        
      <div className="EditProfile__btns">
        <button className="EditProfile__btn-not-solid" onClick={() => closeModal() } >Cancel</button>
        <button className="EditProfile__btn-solid" type="submit" onClick={(e) => handleSubmit(e)} >Save Changes</button>
      </div>
    </>
  )
}

// export default EditProfile;

import { connect } from "react-redux";
import { updateUser } from "../../actions/user_actions";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
  // debugger
  return {
    currentUser: state.entities.users[state.session.id],
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);