// chatInfo should be structured like: 
// {
//   chat_id: 1,
//   chat_type: "Conversation" // Or "Channel"
// }

export const fetchMessages = (chatInfo) => {
  return $.ajax({
    method: "GET",
    url: "/api/messages",
    data: chatInfo
  })
}

export const createMessage = (message) => {
  return $.ajax({
    method: "POST" ,
    url: "/api/messages/",
    data: {
      message: message
    },
    error: (err) => console.log(err)
  })
}

export const patchMessage = (message) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/messages/${message.id}`,
    data: {
        message: message
    }
  })
}

export const deleteMessage = (messageId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/messages/${messageId}`
  })
}