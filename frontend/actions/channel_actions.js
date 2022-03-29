import * as ChannelAPIUtil from '../util/channels_api_util'

// Action constants
export const FETCH_CHANNELS = "channel/fetchChannels"
export const ADD_CHANNEL = "channel/addChannel"
export const UPDATE_CHANNEL = "channel/updateChannel"
export const DELETE_CHANNEL = "channel/deleteChannel"
export const ADD_MEMBER = "channel/addMember"
export const UPDATE_RECENT_MESSAGE = "channel/updateRecentMessage"
export const UPDATE_PINNED_MESSAGES = "channel/updatePinnedMessages"

// Action creators
const fetchChannelsAction = (channels) => {
  return {
    type: FETCH_CHANNELS,
    payload: channels
  }
}

const addChannelAction = (channel) => {
  return {
    type: ADD_CHANNEL,
    payload: channel
  }
}

const updateChannelAction = (channel) => {
  return {
    type: UPDATE_CHANNEL,
    payload: channel
  }
}

const deleteChannelAction = (channelId) => {
  return {
    type: DELETE_CHANNEL,
    payload: channelId
  }
}

const addMemberAction = (userId, channelId) => {
  return {
    type: ADD_MEMBER,
    payload: {
      userId: userId, 
      channelId: channelId,
    }
  }
}

const updateRecentMessageAction = (channelId, messageId) => {
  return {
    type: UPDATE_RECENT_MESSAGE,
    payload: {
      channelId, 
      messageId
    }
  }
}


const updatePinnedMessagesAction = (channelId, pinnedMessages) => {
  return {
    type: UPDATE_PINNED_MESSAGES,
    payload: {
      channelId, 
      pinnedMessages
    }
  }
}

// Thunk action creators
export const fetchChannels = () => dispatch => {
  return ChannelAPIUtil.fetchChannels()
    .then((channels) => dispatch(fetchChannelsAction(channels)))
}

export const addChannel = (channel) => dispatch => {
  return ChannelAPIUtil.createChannel(channel)
    .then((channel) => dispatch(addChannelAction(channel)))
}

export const updateChannel = (channel) => dispatch => {
  return ChannelAPIUtil.patchChannel(channel)
    .then((channel) => dispatch(updateChannelAction(channel)))
}

export const deleteChannel = (channelId) => dispatch => {
  return ChannelAPIUtil.deleteChannel(channelId)
    .then(() => dispatch(deleteChannelAction(channelId)))
}

export const addChannelMember = (userId, channelId) => dispatch => {
  return ChannelAPIUtil.addMember(userId, channelId)
    .then(() => dispatch(addMemberAction(userId, channelId)))
}

export const updateRecentChannelMessage = (channelId, messageId) => dispatch => {
  // debugger
  return dispatch(updateRecentMessageAction(channelId, messageId))
}


export const updatePinnedChannelMessages = (channelId, pinnedMessages) => dispatch => {
  return dispatch(updatePinnedMessagesAction(channelId, pinnedMessages))
}
