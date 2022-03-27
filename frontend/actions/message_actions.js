import * as MessageAPIUtil from '../util/message_api_util'

export const FETCH_MESSAGES = "message/fetchMessages";
export const ADD_MESSAGE = "message/addMessage";
export const UPDATE_MESSAGE = "message/updateMessage";
export const DELETE_MESSAGE = "message/deleteMessage";

// saved messages
export const SAVE_MESSAGE = "message/saveMessage";
export const UNSAVE_MESSAGE = "message/unsaveMessage";
export const FETCH_SAVED_MESSAGES = "message/fetchSavedMessages";

const allMessages = (messages) => {
  return {
    type: FETCH_MESSAGES,
    payload: messages
  }
}

const addMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    payload: message
  }
}

const updateMessage = (message) => {
  return {
    type: UPDATE_MESSAGE,
    payload: message
  }
}

const destroyMessage = (messageId) => {
  return {
    type: DELETE_MESSAGE,
    payload: messageId
  }
}


const saveMessageAction = (saveData) => {
  return {
    type: SAVE_MESSAGE,
    payload: saveData
  }
}

const unsaveMessageAction = (saveId) => {
  return {
    type: UNSAVE_MESSAGE,
    payload: saveId
  }
}

const fetchSavedMessagesAction = (messages) => {
  return {
    type: FETCH_SAVED_MESSAGES,
    payload: messages
  }
}

// Ajax thunk action creators

export const fetchMessagesDB = (chatInfo) => dispatch => {
  return MessageAPIUtil.fetchMessages(chatInfo)
    .then((messages) => dispatch(allMessages(messages)))
}

export const createMessageDB = (message) => dispatch => {
  return MessageAPIUtil.createMessage(message)
    .then((message) => dispatch(addMessage(message)))
}

export const patchMessageDB = (message) => dispatch => {
  return MessageAPIUtil.patchMessage(message)
    .then((message) => dispatch(updateMessage(message)))
}

export const deleteMessageDB = (messageId) => dispatch => {
  return MessageAPIUtil.deleteMessage(messageId)
    .then(() => dispatch(destroyMessage(messageId)))
}

export const saveMessage = (saveData) => dispatch => {
  return MessageAPIUtil.saveMessage(saveData.userId, saveData.messageId)
    .then((res) => dispatch(saveMessageAction(res)) )
}

export const unsaveMessage = (savedId) => dispatch => {
  return MessageAPIUtil.unsaveMessage(savedId)
    .then(() => dispatch(unsaveMessageAction(savedId)) )
}

export const fetchSavedMessages = () => dispatch => {
  return MessageAPIUtil.fetchSavedMessages()
    .then((messages) => dispatch(fetchSavedMessagesAction(messages)) )
}

// Non AJAX actions creators (aka just to change state in frontend)

export const receiveMessage = (message) => dispatch => {
  // debugger
  return dispatch(addMessage(message));
}

export const deleteMessage = (messageId) => dispatch => {
  return dispatch(destroyMessage(messageId));
}

export const patchMessage = (message) => dispatch => {
  return dispatch(updateMessage(message));
}
