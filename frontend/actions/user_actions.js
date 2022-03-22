import * as UsersAPIUtil from '../util/users_api_util'

export const RECEIVE_ALL_USERS = "user/fetchUsers";

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    payload: users
  }
};

export const fetchUsers = () => dispatch => {
  return UsersAPIUtil.fetchUsers()
    .then((users) => dispatch(receiveUsers(users)))
}