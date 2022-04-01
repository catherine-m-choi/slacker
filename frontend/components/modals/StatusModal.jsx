import React, { useState } from "react";
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

function StatusModal(props) {
  const [body, setBody] = useState("");
  const [bodyError, setBodyError] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [emoji, setEmoji] = useState("");

  const displayErrors = <p className="AddChannelModal__form-field-error">Don't forget to enter your status!</p>

  const handleSubmit = e => {
    e.preventDefault();
    if (body === "") {
      setBodyError(true)
    } else {
      setBodyError(false)
      
      const updatedDetails = {
        id: props.currentUserId,
        status_emoji: emoji,
        status_text: body
      }

      props.updateUser(updatedDetails)
      props.closeModal()
    }
  }
  
  const handleEmojiSelect = (e) => {
    setEmoji(e.native);
    setShowEmoji(false);
  }

  return (
    <div className="StatusModal">
      <h3>Set a status</h3>

      {showEmoji && 
        <div className="emoji-selector-container">
          <span className="emoji-selector" >
            <Picker onSelect={handleEmojiSelect} />
          </span>
          <div className="SearchUsers__hidden-background" onClick={() => setShowEmoji(false)} ></div>
        </div>
      }

      <form>
        <div className="AddChannelModal__form-field">
          <div className="has-icon">
            <input 
              type="text" 
              value={body} 
              onChange={(e) => setBody(e.currentTarget.value)} 
              placeholder="What's your status?" 
              autoComplete="off"
            />
            <div className="input-icon" onClick={() => setShowEmoji(!showEmoji)} >
              {emoji ? <span>{emoji}</span> : (
                <span className="material-icons-outlined">sentiment_satisfied_alt</span>
              )}
            </div>
          </div>
          {(bodyError && body==="") && displayErrors}
        </div>

        <div className="StatusModal__btns">
          <button className="StatusModal__btn-not-solid" onClick={(e) => props.closeModal()} >Cancel</button>
          <button className="StatusModal__btn-solid" type="submit" onClick={(e) => handleSubmit(e)} >Create</button>
        </div>
        
      </form>
    </div>
  )
}

import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { updateUser } from "../../actions/user_actions";

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    updateUser: (user) => dispatch(updateUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusModal);