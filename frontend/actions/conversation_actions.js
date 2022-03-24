import * as ConversationAPIUtil from '../util/conversations_api_util'

// Action constants
export const FETCH_CONVOS = "conversation/fetchConvos"
export const ADD_CONVO = "conversation/addConvo"
export const UPDATE_CONVO = "conversation/updateConvo"
export const DELETE_CONVO = "conversation/deleteConvo"


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