import { useState } from 'react';

// Beryllium layout utilities
export const berylliumUtils = {
  // Add utility functions as needed
};

export function useBerylliumSidebars() {
  const [state, setState] = useState({
    isLeftSidebarOpen: false,
    isRightSidebarOpen: false,
    expandedLeft: false,
    expandedRight: false,
  });

  return {
    ...state,
    toggleLeftSidebar: () => setState(s => ({ ...s, isLeftSidebarOpen: !s.isLeftSidebarOpen })),
    toggleRightSidebar: () => setState(s => ({ ...s, isRightSidebarOpen: !s.isRightSidebarOpen })),
  };
}