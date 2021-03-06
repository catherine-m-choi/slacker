import * as ConversationAPIUtil from '../util/conversations_api_util'

// Action constants
export const FETCH_CONVOS = "conversation/fetchConvos"
export const ADD_CONVO = "conversation/addConvo"
export const UPDATE_CONVO = "conversation/updateConvo"
export const DELETE_CONVO = "conversation/deleteConvo"
export const ADD_MEMBER = "conversation/addMember"
export const REMOVE_MEMBER = "conversation/removeMember"
export const UPDATE_RECENT_MESSAGE = "conversation/updateRecentMessage"
export const UPDATE_PINNED_MESSAGES = "conversation/updatePinnedMessages"

// Action creators
const fetchConvosAction = (convos) => {
  return {
    type: FETCH_CONVOS,
    payload: convos
  }
}

const addConvoAction = (convo) => {
  return {
    type: ADD_CONVO,
    payload: convo
  }
}

const updateConvoAction = (convo) => {
  return {
    type: UPDATE_CONVO,
    payload: convo
  }
}

const deleteConvoAction = (convoId) => {
  return {
    type: DELETE_CONVO,
    payload: convoId
  }
}

const addMemberAction = (userId, convoId) => {
  return {
    type: ADD_MEMBER,
    payload: {
      userId: userId, 
      conversationId: convoId,
    }
  }
}

const removeMemberAction = (userId, convoId) => {
  return {
    type: REMOVE_MEMBER,
    payload: {
      userId: userId, 
      conversationId: convoId,
    }
  }
}

const updateRecentMessageAction = (convoId, messageId) => {
  return {
    type: UPDATE_RECENT_MESSAGE,
    payload: {
      convoId, 
      messageId
    }
  }
}

const updatePinnedMessagesAction = (convoId, pinnedMessages) => {
  return {
    type: UPDATE_PINNED_MESSAGES,
    payload: {
      convoId, 
      pinnedMessages
    }
  }
}


// Thunk action creators
export const fetchConvos = () => dispatch => {
  return ConversationAPIUtil.fetchConvos()
    .then((convos) => dispatch(fetchConvosAction(convos)))
}

export const addConvo = (convo) => dispatch => {
  return ConversationAPIUtil.createConvo(convo)
    .then((convo) => dispatch(addConvoAction(convo)))
}

export const updateConvo = (convo) => dispatch => {
  return ConversationAPIUtil.patchConvo(convo)
    .then((convo) => dispatch(updateConvoAction(convo)))
}

export const deleteConvo = (convoId) => dispatch => {
  return ConversationAPIUtil.deleteConvo(convoId)
    .then(() => dispatch(deleteConvoAction(convoId)))
}

export const addMember = (userId, convoId) => dispatch => {
  return ConversationAPIUtil.addMember(userId, convoId)
    .then(() => dispatch(addMemberAction(userId, convoId)))
}

export const removeMember = (userId, convoId) => dispatch => {
  return ConversationAPIUtil.removeMember(userId, convoId)
    .then(() => dispatch(removeMemberAction(userId, convoId)))
}

export const updateRecentMessage = (convoId, messageId) => dispatch => {
  // debugger
  return dispatch(updateRecentMessageAction(convoId, messageId))
}

export const updatePinnedConvoMessages = (convoId, pinnedMessages) => dispatch => {
  return dispatch(updatePinnedMessagesAction(convoId, pinnedMessages))
}
