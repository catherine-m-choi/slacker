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
    <div>
      <form onSubmit={e => e.preventDefault()} >
        <input type="text" value={body} onChange={(e) => setBody(e.target.value) }/>
        <button type="button" onClick={() => setEditStatus(false) }>Cancel</button>
        <button type="submit" onClick={ e => handleSubmit(e)}>Save</button>
      </form>
    </div>
  )
}

export default EditMessageForm