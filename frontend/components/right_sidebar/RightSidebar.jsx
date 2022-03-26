import React from 'react';
import { closeRightSidebar } from '../../actions/right_sidebar_actions';
import { connect } from 'react-redux';
// import ConversationModalContainer from './ConversationModalContainer';
import Thread from './Thread';

function RightSideBar({rightSidebar, closeRightSidebar}) {
  if (!rightSidebar) {
    return null;
  }

  let component;
  switch (rightSidebar.type) {
    case 'Thread':
      // component = <AppRightBar closeRightSidebar={closeRightSidebar} />
      console.log("It's a thread!")
      component = <Thread closeRightSidebar={closeRightSidebar} message={rightSidebar.message} />
      break;
    case 'Profile':
      // tbd
      break;
    default:
      return null;
  }

  return (
    <div className='AppRightBar__container'>
      { component }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    rightSidebar: state.ui.rightSidebar,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeRightSidebar: () => dispatch(closeRightSidebar())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RightSideBar);
