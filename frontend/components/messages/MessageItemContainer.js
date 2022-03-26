import { connect } from "react-redux";
import MessageItem from "./MessageItem";
import { openRightSidebar } from "../../actions/right_sidebar_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    sender: state.entities.users[ownProps.message.userId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openRightSidebar: (sidebarInfo) => dispatch(openRightSidebar(sidebarInfo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageItem);