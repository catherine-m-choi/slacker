import * as MessageAPIUtil from '../util/message_api_util'

export const ADD_MESSAGE = "message/addMessage";
export const UPDATE_MESSAGE = "message/updateMessage";
export const DELETE_MESSAGE = "message/deleteMessage";
export const FETCH_MESSAGES = "message/fetchMessages";

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