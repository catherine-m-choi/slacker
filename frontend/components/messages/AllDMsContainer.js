import { connect } from "react-redux";
import AllDMs from "./AllDMs";
import { selectDirectMessages } from "../../reducers/selectors/selectors";

const mapStateToProps = state => {
  return {
    messages: selectDirectMessages(state),
    users: state.entities.users,
    currentUserId: state.session.id,
  }
}

export default connect(mapStateToProps, null)(AllDMs);
