import React, { useState } from "react";

function EditMessageForm({message, patchMessageDB, setEditStatus}) {
  const [body, setBody] = useState(message.body)

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedMessage = Object.assign({}, message);
    updatedMessage.body = body;
    patchMessageDB(updatedMessage);
    setEditStatus(false);
  }

  return (
    <div className="MessageForm__container" >
      <form onSubmit={e => e.preventDefault()} className="MessageForm" >
        <div className="MessageForm__format-btns" ></div>
        {/* <input type="text" value={body} onChange={(e) => setBody(e.target.value) }/> */}

        <textarea 
            // rows="10"
          type="text" 
          value={body} 
          onChange={(e) => setBody(e.target.value) }
          id="MessageForm__body"
        ></textarea>
        
        <div id="EditMessageForm__btns" >
          <button type="button" onClick={() => setEditStatus(false) }>Cancel</button>
          <button type="submit" onClick={ e => handleSubmit(e)}>Save</button>
        </div>

        <div className="MessageForm__format-btns no-background" ></div>
      </form>
    </div>
  )
}

export default EditMessageForm