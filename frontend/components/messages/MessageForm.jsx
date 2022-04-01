import React, { useEffect, useState } from "react";
import GiphySearch from "./GiphySearch";
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

function MessageForm(props) {

  const [body, setBody] = useState(props.message.body);
  const [sent, setSent] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);

  // set to true for easier testing
  const [showGiphy, setShowGiphy] = useState(false);
  const [giphySearchQuery, setGiphySearchQuery] = useState("");

  let newMessage;
  const handleSubmit = () => {
    let messageType;
    setSent(true);

    if (giphySearchQuery.length > 0) {
      setShowGiphy(true);
    } else {

      if (props.parentMessage) {
        messageType = props.parentMessage.messageableType;

        newMessage = {
          body: body,
          user_id: props.currentUser.id,
          parent_message_id: props.parentMessage.id,
          messageable_type: props.parentMessage.messageableType,
          messageable_id: props.parentMessage.messageableId,
        }

        props.messageAction(newMessage)
          .then(props.incrementReplyCount(props.parentMessage.id))
        // props.incrementReplyCount(props.parentMessage.id);
      } else {

        switch (props.match.path) {
          case '/app/conversations/:id':
            messageType = "Conversation";

            newMessage = {
              body: body,
              user_id: props.currentUser.id,
              parent_message_id: null,
              messageable_type: messageType,
              messageable_id: props.match.params.id,
            }
      
            props.messageAction(newMessage).then( (res) => {
              props.updateRecentConvoMessage(res.payload.messageableId, res.payload.id)
            })

            break;
          case '/app/drafts':
            messageType = "Conversation"
            let convoId;

            props.addConvo()
              .then((res) => {
                props.recipients.forEach((userId) => {
                  props.addMember(userId, res.payload.id)
                })

                newMessage = {
                  body: body,
                  user_id: props.currentUser.id,
                  parent_message_id: null,
                  messageable_type: messageType,
                  messageable_id: res.payload.id,
                }

                convoId = res.payload.id
                props.messageAction(newMessage)
                .then( (res) => props.updateRecentConvoMessage(convoId, res.payload.id))
                .then( () => {
                  props.history.push(`/app/conversations/${convoId}`)
                })

              })
            break;
          case '/app/channels/:id':
            messageType = "Channel"

            newMessage = {
              body: body,
              user_id: props.currentUser.id,
              parent_message_id: null,
              messageable_type: messageType,
              messageable_id: props.match.params.id,
            }
      
            props.messageAction(newMessage).then( (res) => {
              props.updateRecentChannelMessage(res.payload.messageableId, res.payload.id)
            })

            break;
          default:
            break;
        }
      }
    }
    setBody("");
  }

  useEffect(() => {
    if (body.slice(0,7) === "/giphy ") {
      setGiphySearchQuery(body.slice(7));
    }
  }, [body])

  useEffect(() => {
    if (body !== "" && sent === false) {
      // console.log("SAVE DRAFT!")
      setBody("");
    }
  }, [props.location])

  const onKeyDown = (e) => {
    if (body !== "" && e.keyCode === 13) {
      handleSubmit();
      // console.log("setting body blank")
      setBody("");
    }
  }

  const handleEmojiSelect = (e) => {
    setBody(body + e.native);
    setShowEmoji(false);
  }
  
  return (
    <div>

      {showGiphy &&
        <GiphySearch 
        giphySearchQuery={giphySearchQuery} 
        setShowGiphy={setShowGiphy} 
        currentUser={props.currentUser}
        messageAction={props.messageAction}
        />
      }

      {showEmoji && 
        <div className="emoji-selector-container">
          <span className="emoji-selector" >
            <Picker onSelect={handleEmojiSelect} />
          </span>
          <div className="SearchUsers__hidden-background" onClick={() => setShowEmoji(false)} ></div>
        </div>
      }

      <div className={`MessageForm__container ${(props.parentMessage) ? "thread" : ""}`}>
        <form className="MessageForm">

          {/* <span id="emoji-button" onClick={() => setShowEmoji(!showEmoji)} >Click to add emoji</span> */}

          <div className="MessageForm__format-btns" ></div>
          <textarea 
            key={props.placeholderMsg}
            type="text" 
            value={body} 
            onChange={(e) => setBody(e.target.value) }
            placeholder={`Message ${props.placeholderMsg}`}
            onKeyDown={onKeyDown}
          >
          </textarea>

          <button onClick={handleSubmit}>
            <span className="material-icons noselect">
              send
            </span>
          </button>

          <div className="emoji-btn" onClick={() => setShowEmoji(!showEmoji)} >
            <i className="material-icons-outlined noselect">add_reaction</i>
          </div>

        </form>
      </div>
    </div>
  )
}

export default MessageForm;