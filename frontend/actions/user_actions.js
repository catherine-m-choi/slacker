import * as UsersAPIUtil from '../util/users_api_util'

export const RECEIVE_ALL_USERS = "user/fetchUsers";
export const RECEIVE_USER = "user/fetchUser";
export const UPDATE_USER = "user/updateUserDetails"

const receiveUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    payload: users
  }
};

const receiveUser = (user) => {
  return {
    type: RECEIVE_ALL_USERS,
    payload: user
  }
};

const updateUserAction = (user) => {
  return {
    type: UPDATE_USER, 
    payload: user
  }
}


export const fetchUsers = () => dispatch => {
  return UsersAPIUtil.fetchUsers()
    .then((users) => dispatch(receiveUsers(users)))
}

export const fetchUser = (userId) => dispatch => {
  return UsersAPIUtil.fetchUser(userId)
    .then((user) => dispatch(receiveUser(user)))
}

export const updateUser = (user) => dispatch => {
  return UsersAPIUtil.updateUser(user)
    .then((user) => dispatch(updateUserAction(user)))
}