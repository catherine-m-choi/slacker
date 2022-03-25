export const getFilteredUsers = (state, userIds) => {
  const users = state.entities.users
  // debugger
  let result = {};
  userIds.forEach(id => {
    result[id] = users[id]
  });
  return result;
}


// export const getFilteredMessages = (state, messageType, messageId) => {
//   const messages = state.entities.messages
//   let result = {};
//   for (let id in messages) {
//     if (messages[id].messageType === messageType && messages[id].messageableId === messageId) {
//       result[id] = messages[id]
//     }
//   }

//   return result;
// }