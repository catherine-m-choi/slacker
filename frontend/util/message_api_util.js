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
    url: "/api/messages",
    data: {
        message: message
    }
  })
}

export const deleteMessage = (messageId) => {
  return $.ajax({
    method: "DELETE",
    url: "/api/messages",
    data: {
      id: messageId
    }
  })
}