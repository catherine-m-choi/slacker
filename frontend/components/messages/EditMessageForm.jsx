import React, { useState } from "react";

function EditMessageForm({message, patchMessageDB, setEditStatus}) {
  const [body, setBody] = useState(message.body)

  const handleSubmit = () => {
    const updatedMessage = Object.assign({}, message);
    updatedMessage.body = body;
    patchMessageDB(updatedMessage);
    setEditStatus(false);
  }

  return (
    <div>
      <form>
        <input type="text" value={body} onChange={(e) => setBody(e.target.value) }/>
        <button onClick={() => setEditStatus(false) }>Cancel</button>
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  )
}

export default EditMessageForm