import { connect } from "react-redux";
import AllDMs from "./AllDMs";

const mapStateToProps = state => {
  // debugger
  return {
    // messages: 
    users: state.entities.users,
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // messages: 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllDMs);
