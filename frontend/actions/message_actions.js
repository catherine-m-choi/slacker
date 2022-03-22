import * as MessageAPIUtil from '../util/message_api_util'

export const ADD_MESSAGE = "message/addMessage";
export const UPDATE_MESSAGE = "message/updateMessage";
export const DELETE_MESSAGE = "message/deleteMessage";

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
    type: DELETE_MESSAGE
  }
}


export const createMessage = (message) => dispatch => {
  return MessageAPIUtil.createMessage(message)
    .then((message) => dispatch(addMessage(message)))
}

export const patchMessage = (message) => dispatch => {
  return MessageAPIUtil.patchMessage(message)
    .then((message) => dispatch(updateMessage(message)))
}

export const deleteMessage = (messageId) => dispatch => {
  return MessageAPIUtil.deleteMessage(messageId)
    .then(() => dispatch(destroyMessage(messageId)))
}
