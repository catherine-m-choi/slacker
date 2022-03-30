import { connect } from "react-redux";
import ChannelIndex from "./ChannelIndex";
import { fetchChannels } from "../../../actions/channel_actions";

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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);