export const getFilteredUsers = (state, userIds) => {
  const users = state.entities.users
  // debugger
  let result = {};
  userIds.forEach(id => {
    result[id] = users[id]
  });
  return result;
}
