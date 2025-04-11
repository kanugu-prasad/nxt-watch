import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import NotFound from './components/NotFound'

import NextWatchContext from './context/NextWatchContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'

class App extends Component {
  state = {theme: false, activeTab: 'Home', savedList: []}

  onChangeTab = id => {
    this.setState({activeTab: id})
  }

  toggleTheme = () => {
    this.setState(prevState => ({theme: !prevState.theme}))
  }

  toggleVideoInSavedList = product => {
    this.setState({savedList: product})
  }

  render() {
    const {theme, activeTab, savedList} = this.state

    return (
      <NextWatchContext.Provider
        value={{
          theme,
          savedList,
          activeTab,
          onChangeTab: this.onChangeTab,
          toggleTheme: this.toggleTheme,
          toggleVideoInSavedList: this.toggleVideoInSavedList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NextWatchContext.Provider>
    )
  }
}

export default App
