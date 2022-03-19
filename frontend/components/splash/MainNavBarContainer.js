import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import MainNavBar from "./MainNavBar";

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (user) => dispatch(logout(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNavBar)