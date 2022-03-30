import React, { useState } from "react";
import { createChannel } from "../../util/channels_api_util";

function AddChannelModal(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [privateChannel, setPrivateChannel] = useState(false);
  const [nameError, setNameError] = useState(false)

  const update = (field) => {
    switch (field) {
      case "name":
        return (e) => setName(e.currentTarget.value);
      case "description":
        return (e) => setDescription(e.currentTarget.value);
      default:
        break;
    }
  }

  const displayErrors = <p className="AddChannelModal__form-field-error">Don't forget to enter a name!</p>

  const handleSubmit = e => {
    e.preventDefault();
    if (name === "") {
      setNameError(true)
    } else {
      setNameError(false)
      const channelParams = {
        founder_id: props.currentUserId,
        name: name,
        description: description,
        private: privateChannel
      }
      props.addChannel(channelParams).then(() => closeModal() )
    }
  }
  
  return (
    <div className="AddChannelModal">
      <h3>Create a channel</h3>
      <div className="AddChannelModal__sub-heading">
        Channels are where your team communicates. 
        They’re best when organized around a topic — #marketing, 
        for example.
      </div>

      <form>
        <div className="AddChannelModal__form-field">
          <label htmlFor="modal-name">Name</label>
          <div className="has-icon">
            <input 
              type="text" 
              id="modal-name" 
              value={name} 
              onChange={update("name")} 
              placeholder="e.g. plan-budget" 
              autoComplete="off"
            />
            <div className="input-icon">
              <span className="material-icons-outlined">tag</span>
            </div>
          </div>
          {(nameError && name==="") && displayErrors}
        </div>

        <div className="AddChannelModal__form-field">
          <label htmlFor="modal-description">Description<span className="AddChannelModal__form-field-optional" >(optional)</span></label>
          <input 
            type="text" 
            id="modal-description" 
            value={description} 
            onChange={update("description")} 
            autoComplete="off"
            />
          <p className="small" >What’s this channel about?</p>
        </div>

        <div>
          <label htmlFor="modal-private">Make private</label>
          <div className="modal-private-content">
            <p>When a channel is set to private, it can only be viewed or joined by invitation.</p>
            {/* <input type="text" id="modal-private" value={privateChannel} onChange={update("privateChannel")} /> */}
            {privateChannel ? (
              <div className="toggle toggle-false" onClick={() => setPrivateChannel(!privateChannel)} tabIndex="0" >
                <div></div>
              </div>
            ) : (
              <div className="toggle toggle-true" onClick={() => setPrivateChannel(!privateChannel)} tabIndex="0">
                <span className="toggle-true-content">
                  <div></div>
                  <span className="material-icons-outlined noselect">done</span>
                </span>
              </div>
            )}
          </div>
        </div>
        
        <button type="submit" onClick={(e) => handleSubmit(e)} >Create</button>
      </form>
    </div>
  )
}

import { connect } from "react-redux";
// import { updateUser } from "../../actions/user_actions";
import { closeModal } from "../../actions/modal_actions";
import { addChannel } from "../../actions/channel_actions";

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addChannel: (channel) => dispatch(addChannel(channel)),
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddChannelModal);