export const getFilteredUsers = (state, userIds) => {
  const users = state.entities.users
  // debugger
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

  // debugger

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

  // debugger

  return result;
}