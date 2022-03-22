import { connect } from "react-redux";
import MessageItem from "./MessageItem";

const mapStateToProps = (state, ownProps) => {
  return {
    sender: state.entities.users[ownProps.message.userId]
  }
}

export default connect(mapStateToProps, null)(MessageItem);