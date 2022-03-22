export const CHANGE_THEME = "theme/changeTheme"

const changeTheme = (theme) => {
  return {
    type: CHANGE_THEME,
    payload: theme
  }
}

export const updatetheme = (theme) => dispatch => {
  return () => dispatch(changeTheme(theme))
}