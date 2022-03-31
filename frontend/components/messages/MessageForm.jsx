import React, { useEffect, useState } from "react";
import GiphySearch from "./GiphySearch";

function MessageForm(props) {

  const [body, setBody] = useState(props.message.body);
  const [sent, setSent] = useState(false);

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
        console.log("thread reply")
        console.log("not a new convo")
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
                  console.log("pushing to new convoid")
                })

              })
            break;
          case '/app/channels/:id':
            messageType = "Channel"
            debugger

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
      console.log("SAVE DRAFT!")
      setBody("");
    }
  }, [props.location])

  // let currentChat;
  // let placeholderMsg = ""
  // if (props.match.path === '/app/conversations/:id') {
  //   currentChat = props.conversations[props.match.params.id]

  //   if (!currentChat) {
  //     return <NoMatch />
  //   }

  //   let memberNames = []
  //   currentChat.members.map((userId) => {
  //     if (props.users) {
  //       let user = props.users[userId]
  //       if (user && userId !== props.currentUser.id) {
  //         memberNames.push((user.displayName))
  //       } 
  //     }
  //     // const slicedNames = members.slice(0, members.length - 1)
  //     // const prettyNames = slicedNames.join(", ") + ((members.length > 2) ? "," : "") + ` and ${members[members.length - 1]}`
  //     placeholderMsg = memberNames.join(", ")
  //     // debugger
  //   })
  // } else if (props.match.path === '/app/channels/:id') {
  //   currentChat = props.channels[props.match.params.id]
  //   placeholderMsg = currentChat.name
  // }
  // debugger

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

      <div className={`MessageForm__container ${(props.parentMessage) ? "thread" : ""}`}>
        <form className="MessageForm">
          <div className="MessageForm__format-btns" ></div>
          <textarea 
            // rows="10"
            type="text" 
            value={body} 
            onChange={(e) => setBody(e.target.value) }
            placeholder={`Message ${props.placeholderMsg}`}
          >
          </textarea>
          {/* <input 
            type="text" 
            value={body} 
            onChange={(e) => setBody(e.target.value) }
            placeholder={`Message ${props.placeholderMsg}`}
          /> */}
          <button onClick={handleSubmit}>
            <span class="material-icons noselect">
              send
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default MessageForm;