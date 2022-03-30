export const fetchChannels = () => {
  return $.ajax({
    method: "GET",
    url: "/api/channels"
  })
}

export const createChannel = (channel) => {
  return $.ajax({
    method: "POST",
    url: "/api/channels",
    data: {
        channel: channel
    }
  })
}

export const patchChannel = (channel) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/channels/${channel.id}`,
    data: {
        channel: channel
    }
  })
}

export const deleteChannel = (channelId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/channels/${channelId}`
  })
}

export const addMember = (userId, channelId) => {
  return $.ajax({
    method: "POST",
    url: "/api/channel_memberships",
    data: {
        channel_memberships: {
            user_id: userId,
            channel_id: channelId
        }
    }
  })
}

export const removeMember = (userId, channelId) => {
  return $.ajax({
    method: "DELETE",
    url: "/api/channel_memberships/1",
    data: {
      user_id: userId,
      channel_id: channelId
    }
  })
}
