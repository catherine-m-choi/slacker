export const OPEN_RIGHT_SIDEBAR = 'rightSideBar/open';
export const CLOSE_RIGHT_SIDEBAR = 'rightSideBar/close';

export const openRightSidebar = sidebarInfo => {
  return {
    type: OPEN_RIGHT_SIDEBAR,
    sidebarInfo
  };
};

export const closeRightSidebar = () => {
  return {
    type: CLOSE_RIGHT_SIDEBAR
  };
};
