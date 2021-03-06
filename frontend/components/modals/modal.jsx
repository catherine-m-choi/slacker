import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ConversationModalContainer from './ConversationModalContainer';
import ChannelModalContainer from './ChannelModalContainer';
import PinnedMessageModalContainer from './PinnedMessageModalContainer';
import ProfileCard from './ProfileCard';
import EditProfile from './EditProfile';
import AddChannelModal from './AddChannelModal';
import StatusModal from './StatusModal';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'convo/addMembers':
      component = <ConversationModalContainer />
      break;
    case 'channel/modal-description':
      component = <ChannelModalContainer tab="description" />
      break;
    case 'channel/modal-members':
      component = <ChannelModalContainer tab="members" />
      break;
    case 'channel/addMembers':
      component = <ChannelModalContainer />
      break;
    case 'channel/addChannel':
      component = <AddChannelModal />
      break;
    case 'profile/edit':
      component = <EditProfile />
      break;
    case 'profile/status':
      component = <StatusModal />
      break;
    case 'convo/profileCard':
      component = <ProfileCard />
      break;
    case 'convo/pinnedMessages':
      component = <PinnedMessageModalContainer />
      break;
    default:
      return null;
  }
  return (
    <div className={`modal-background ${modal.split("/").join("-") }`} onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
