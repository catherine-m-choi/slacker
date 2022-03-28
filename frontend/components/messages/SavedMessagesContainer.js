import { connect } from "react-redux";
import SavedMessages from "./SavedMessages";
import { fetchSavedMessages } from "../../actions/message_actions";
import { selectSavedMessages } from "../../reducers/selectors/selectors"

const mapStateToProps = state => {
  return {
    // savedMessagesIds: Object.values(state.session.savedMessages),
    // messages: state.entities.messages,
    savedMessages: selectSavedMessages(state).reverse(),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSavedMessages: () => dispatch(fetchSavedMessages()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedMessages);