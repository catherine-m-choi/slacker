export const fetchConvos = () => {
  return $.ajax({
    method: "GET",
    url: "/api/conversations"
  })
}

export const createConvo = (conversation) => {
  return $.ajax({
    method: "POST",
    url: "/api/conversations",
    data: {
        conversation: conversation
    }
  })
}

export const patchConvo = (conversation) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/conversations/${conversation.id}`,
    data: {
        conversation: conversation
    }
  })
}

export const deleteConvo = (conversationId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/conversations/${conversationId}`
  })
}

export const addMember = (userId, conversationId) => {
  return $.ajax({
    method: "POST",
    url: "/api/conversation_memberships",
    data: {
        conversation_memberships: {
            user_id: userId,
            conversation_id: conversationId
        }
    }
  })
}
