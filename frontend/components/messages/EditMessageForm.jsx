import React, { useState } from "react";

function EditMessageForm({message, patchMessageDB, setEditStatus}) {
  const [body, setBody] = useState(message.body)

  const handleSubmit = (e) => {
    // e.preventDefault()
    const updatedMessage = Object.assign({}, message);
    updatedMessage.body = body;
    patchMessageDB(updatedMessage);
    setEditStatus(false);
  }


  const onKeyDown = (e) => {
    console.log("pressed enter")
    if (body !== "" && e.keyCode === 13) {
      handleSubmit()
    }
  }

  return (
    <div className="MessageForm__container" >
      <form className="MessageForm" >
        <div className="MessageForm__format-btns" ></div>

        <textarea 
          type="text" 
          value={body} 
          onChange={(e) => setBody(e.target.value) }
          id="MessageForm__body"
          onKeyDown={onKeyDown}
        ></textarea>
        
        <div id="EditMessageForm__btns" >
          <button type="button" onClick={() => setEditStatus(false) }>Cancel</button>
          <button type="button" onClick={ e => handleSubmit(e)}>Save</button>
        </div>

        <div className="MessageForm__format-btns no-background" ></div>
      </form>
    </div>
  )
}

export default EditMessageForm