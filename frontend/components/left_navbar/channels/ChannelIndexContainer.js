import { connect } from "react-redux";
import ChannelIndex from "./ChannelIndex";
import { fetchChannels } from "../../../actions/channel_actions";
import { openModal } from "../../../actions/modal_actions";

const mapStateToProps = (state) => {
  return {
    channels: state.entities.channels,
    users: state.entities.users,
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = (state) => {
  return {
    fetchChannels: () => dispatch(fetchChannels()),
    openModal: (modal) => dispatch(openModal(modal)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);