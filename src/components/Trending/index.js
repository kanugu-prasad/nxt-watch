import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import EachTrendingVideo from '../EachTrendingVideo'
import NextWatchContext from '../../context/NextWatchContext'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  HomeFistContainer,
  HomeContainer,
  TrendingContainer,
  TrendingTitleContainer,
  TrendingLogoContainer,
  TrendingHeadingName,
  UnorderTrendingContainer,
  FailureSubContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryButton,
} from './styledComponents'

const trendingApiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class Trending extends Component {
  state = {
    trendingList: [],
    trendingApiStatus: trendingApiStatusConstant.initial,
  }

  componentDidMount() {
    this.getTrendingList()
  }

  getTrendingList = async () => {
    this.setState({trendingApiStatus: trendingApiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const trendingResponse = await fetch(url, options)
    const trendingData = await trendingResponse.json()
    const updatedTrendingData = trendingData.videos.map(each => ({
      channel: {
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      },
      id: each.id,
      publishedAt: formatDistanceToNow(new Date(each.published_at)),
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      viewCount: each.view_count,
    }))

    if (trendingResponse.ok) {
      this.setState({
        trendingList: updatedTrendingData,
        trendingApiStatus: trendingApiStatusConstant.success,
      })
    } else {
      this.setState({trendingApiStatus: trendingApiStatusConstant.failure})
    }
  }

  trendingApiStatusConstantSuccess = () => (
    <NextWatchContext.Consumer>
      {value => {
        const {theme} = value
        const {trendingList} = this.state

        return (
          <TrendingContainer>
            <TrendingTitleContainer bgColor={theme}>
              <TrendingLogoContainer bgColor={theme}>
                <HiFire color="red" size="30" />
              </TrendingLogoContainer>
              <TrendingHeadingName color={theme}>Trending</TrendingHeadingName>
            </TrendingTitleContainer>
            <UnorderTrendingContainer bgColor={theme}>
              {trendingList.map(each => (
                <EachTrendingVideo key={each.id} eachTrendingDetail={each} />
              ))}
            </UnorderTrendingContainer>
          </TrendingContainer>
        )
      }}
    </NextWatchContext.Consumer>
  )

  trendingApiStatusConstantFailure = () => (
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
            <RetryButton onClick={this.getTrendingList}>Retry</RetryButton>
          </FailureSubContainer>
        )
      }}
    </NextWatchContext.Consumer>
  )

  trendingApiStatusConstantProgress = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  trendingApiStatusConstantResult = () => {
    const {trendingApiStatus} = this.state
    switch (trendingApiStatus) {
      case trendingApiStatusConstant.success:
        return this.trendingApiStatusConstantSuccess()
      case trendingApiStatusConstant.failure:
        return this.trendingApiStatusConstantFailure()
      case trendingApiStatusConstant.inProgress:
        return this.trendingApiStatusConstantProgress()
      default:
        return null
    }
  }

  render() {
    return (
      <HomeFistContainer data-testid="trending">
        <Header />
        <HomeContainer>
          <SideBar />
          {this.trendingApiStatusConstantResult()}
        </HomeContainer>
      </HomeFistContainer>
    )
  }
}

export default Trending
