import { connect } from "react-redux";
import { signup, clearSessionErrors } from "../../actions/session_actions";
import SignupForm from "./SignUpForm";

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signup: (user) => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)