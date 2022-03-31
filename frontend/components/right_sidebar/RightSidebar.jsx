import React from 'react';
import { closeRightSidebar } from '../../actions/right_sidebar_actions';
import { connect } from 'react-redux';
import Thread from './Thread';
import Profile from './Profile';

function RightSideBar({rightSidebar, closeRightSidebar}) {
  if (!rightSidebar) {
    return null;
  }

  let component;
  switch (rightSidebar.type) {
    case 'Thread':
      component = <Thread closeRightSidebar={closeRightSidebar} message={rightSidebar.message} />
      break;
    case 'Profile':
      component = <Profile closeRightSidebar={closeRightSidebar} userId={rightSidebar.user.id}/>
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
