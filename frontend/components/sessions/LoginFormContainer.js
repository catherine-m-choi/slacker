import { connect } from "react-redux";
import { login, clearSessionErrors } from "../../actions/session_actions";
import LoginForm from "./LoginForm";

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)