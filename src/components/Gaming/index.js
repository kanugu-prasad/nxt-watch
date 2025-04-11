import {Component} from 'react'

import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import EachGamingVideo from '../EachGamingVideo'
import NextWatchContext from '../../context/NextWatchContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  HomeFistContainer,
  HomeContainer,
  GamingContainer,
  GamingTitleContainer,
  GamingLogoContainer,
  GamingHeadingName,
  UnorderGamingContainer,
  FailureSubContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryButton,
} from './styledComponents'

const gamingApiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class Gaming extends Component {
  state = {
    gamingList: [],
    gamingApiStatus: gamingApiStatusConstant.initial,
  }

  componentDidMount() {
    this.getGamingList()
  }

  getGamingList = async () => {
    this.setState({gamingApiStatus: gamingApiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const gamingResponse = await fetch(url, options)
    const gamingData = await gamingResponse.json()
    const updatedGamingData = gamingData.videos.map(each => ({
      id: each.id,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      viewCount: each.view_count,
    }))

    if (gamingResponse.ok) {
      this.setState({
        gamingList: updatedGamingData,
        gamingApiStatus: gamingApiStatusConstant.success,
      })
    } else {
      this.setState({gamingApiStatus: gamingApiStatusConstant.failure})
    }
  }

  gamingApiStatusConstantSuccess = () => (
    <NextWatchContext.Consumer>
      {value => {
        const {theme} = value
        const {gamingList} = this.state

        return (
          <GamingContainer>
            <GamingTitleContainer bgColor={theme}>
              <GamingLogoContainer bgColor={theme}>
                <SiYoutubegaming color="red" size="30" />
              </GamingLogoContainer>
              <GamingHeadingName color={theme}>Gaming</GamingHeadingName>
            </GamingTitleContainer>
            <UnorderGamingContainer bgColor={theme}>
              {gamingList.map(each => (
                <EachGamingVideo key={each.id} eachGamingDetail={each} />
              ))}
            </UnorderGamingContainer>
          </GamingContainer>
        )
      }}
    </NextWatchContext.Consumer>
  )

  gamingApiStatusConstantFailure = () => (
    <NextWatchContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <FailureSubContainer bgColor={theme}>
            <FailureImage
              src={
                theme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
            />
            <FailureHeading color={theme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailurePara color={theme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailurePara>
            <RetryButton onClick={this.getGamingList}>Retry</RetryButton>
          </FailureSubContainer>
        )
      }}
    </NextWatchContext.Consumer>
  )

  gamingApiStatusConstantProgress = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  gamingApiStatusConstantResult = () => {
    const {gamingApiStatus} = this.state
    switch (gamingApiStatus) {
      case gamingApiStatusConstant.success:
        return this.gamingApiStatusConstantSuccess()
      case gamingApiStatusConstant.failure:
        return this.gamingApiStatusConstantFailure()
      case gamingApiStatusConstant.inProgress:
        return this.gamingApiStatusConstantProgress()
      default:
        return null
    }
  }

  render() {
    return (
      <HomeFistContainer data-testid="gaming">
        <Header />
        <HomeContainer>
          <SideBar />
          {this.gamingApiStatusConstantResult()}
        </HomeContainer>
      </HomeFistContainer>
    )
  }
}

export default Gaming
