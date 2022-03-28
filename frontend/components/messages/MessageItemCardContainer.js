import { connect } from "react-redux";
import MessageItemCard from "./MessageItemCard";

const mapStateToProps = (state, ownProps) => {
  return {
    sender: state.entities.users[ownProps.message.userId],
    users: state.entities.users,
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openRightSidebar: (sidebarInfo) => dispatch(openRightSidebar(sidebarInfo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageItemCard);