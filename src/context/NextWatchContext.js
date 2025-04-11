import React from 'react'

const NextWatchContext = React.createContext({
  theme: false,
  toggleTheme: () => {},
  activeTab: 'Home',
  onChangeTab: () => {},
  savedList: [],
  toggleVideoInSavedList: () => {},
})

export default NextWatchContext
