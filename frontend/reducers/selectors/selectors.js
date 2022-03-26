export const getFilteredUsers = (state, userIds) => {
  const users = state.entities.users
  let result = {};
  userIds.forEach(id => {
    result[id] = users[id]
  });
  return result;
}


export const selectThreadMessages = (state, parentId) => {
  const messages = state.entities.messages
  let result = {};
  for (let id in messages) {
    // debugger
    if (String(messages[id].parentMessageId) === String(parentId)) {
      result[id] = messages[id]
    }
  }
  return result;
}

export const selectConvoMessages = (state, convoId) => {
  const messages = state.entities.messages
  let result = {};
  for (let id in messages) {
    // debugger
    if (messages[id].messageableType === "Conversation" && String(messages[id].messageableId) === String(convoId)  ) {
      result[id] = messages[id]
    }
  }
  return result;
}

export const selectDirectMessages = (state) => {
  // debugger
  const messages = state.entities.messages
  const conversations = state.entities.conversations
  // For every convo the user is in, select the most recent message. Sort by most recent messages.

  let result = [];
  if (Object.values(messages).length) {
    for (let id in conversations) {
      result.push({
        date: conversations[id].lastMessage,
        message: messages[conversations[id].lastMessage]
      })
    }
  }
  
  result.sort( ( a, b ) => { return b.date - a.date; } );
  return result;
}