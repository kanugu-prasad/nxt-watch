import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {IoIosClose, IoMdSearch} from 'react-icons/io'
import Header from '../Header'
import SideBar from '../SideBar'
import EachVideo from '../EachVideo'

import {
  HomeFistContainer,
  HomeContainer,
  HomeSubContainer,
  HomeBannerContainer,
  BannerImageDeleteContainer,
  BannerImage,
  XButton,
  BannerPara,
  GetButton,
  SearchVideosContainer,
  SearchContainer,
  InputSearch,
  ButtonIcon,
  UnorderVideoContainer,
  FailureSubContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryButton,
} from './styledComponents'
import NextWatchContext from '../../context/NextWatchContext'

const videoApiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videoList: [],
    searchInput: '',
    videoApiStatus: videoApiStatusConstant.initial,
    banner: true,
  }

  componentDidMount() {
    this.getallVideoList()
  }

  getallVideoList = async () => {
    this.setState({videoApiStatus: videoApiStatusConstant.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const allVideoResponse = await fetch(url, options)

    const updatedAllVideoResponse = await allVideoResponse.json()

    if (allVideoResponse.ok) {
      const finalUpdatedAllVideoResponsed = updatedAllVideoResponse.videos.map(
        each => ({
          channel: {
            name: each.channel.name,
            profileImageUrl: each.channel.profile_image_url,
          },
          id: each.id,
          publishedAt: each.published_at,
          thumbnailUrl: each.thumbnail_url,
          title: each.title,
          viewCount: each.view_count,
        }),
      )
      this.setState({
        videoList: finalUpdatedAllVideoResponsed,
        videoApiStatus: videoApiStatusConstant.success,
      })
    } else {
      this.setState({videoApiStatus: videoApiStatusConstant.failure})
    }
  }

  onClickClose = () => {
    this.setState({banner: false})
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  bannerView = () => (
    <HomeBannerContainer data-testid="banner">
      <BannerImageDeleteContainer>
        <BannerImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <XButton onClick={this.onClickClose} data-testid="close">
          <IoIosClose size="24" />
        </XButton>
      </BannerImageDeleteContainer>
      <BannerPara>Buy Nxt Watch Premium prepaid plans with UPI</BannerPara>
      <GetButton>GET IT NOW</GetButton>
    </HomeBannerContainer>
  )

  videoApiStatusConstantProgress = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  videoApiStatusConstantSuccess = () => {
    const {videoList} = this.state
    return (
      <UnorderVideoContainer>
        {videoList.map(each => (
          <EachVideo key={each.id} eachVideoDetail={each} />
        ))}
      </UnorderVideoContainer>
    )
  }

  videoApiStatusConstantFailure = () => (
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
              alt="failure view"
            />
            <FailureHeading color={theme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailurePara color={theme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailurePara>
            <RetryButton onClick={this.getallVideoList}>Retry</RetryButton>
          </FailureSubContainer>
        )
      }}
    </NextWatchContext.Consumer>
  )

  emptyVideoListResult = () => (
    <NextWatchContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <FailureSubContainer bgColor={theme}>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureHeading color={theme}>
              No Search results found
            </FailureHeading>
            <FailurePara color={theme}>
              Try different key words or remove search filter
            </FailurePara>
            <RetryButton onClick={this.getallVideoList}>Retry</RetryButton>
          </FailureSubContainer>
        )
      }}
    </NextWatchContext.Consumer>
  )

  videoApiStatusConstantResult = () => {
    const {videoApiStatus} = this.state
    switch (videoApiStatus) {
      case videoApiStatusConstant.success:
        return this.videoApiStatusConstantSuccess()
      case videoApiStatusConstant.failure:
        return this.videoApiStatusConstantFailure()
      case videoApiStatusConstant.inProgress:
        return this.videoApiStatusConstantProgress()
      default:
        return null
    }
  }

  getHomeView = () => (
    <NextWatchContext.Consumer>
      {value => {
        const {theme} = value
        const {banner, searchInput, videoList} = this.state
        const lengthVideoList = videoList.length
        return (
          <HomeSubContainer>
            {banner && this.bannerView()}
            <SearchVideosContainer bgColor={theme}>
              <SearchContainer>
                <InputSearch
                  type="search"
                  placeholder="Search"
                  value={searchInput}
                  onChange={this.onChangeSearch}
                />
                <ButtonIcon
                  color={theme}
                  data-testid="searchButton"
                  onClick={() => this.getallVideoList()}
                >
                  <IoMdSearch size="20" />
                </ButtonIcon>
              </SearchContainer>
              {lengthVideoList === 0
                ? this.emptyVideoListResult()
                : this.videoApiStatusConstantResult()}
            </SearchVideosContainer>
          </HomeSubContainer>
        )
      }}
    </NextWatchContext.Consumer>
  )

  render() {
    return (
      <HomeFistContainer data-testid="home">
        <Header />
        <HomeContainer>
          <SideBar />
          {this.getHomeView()}
        </HomeContainer>
      </HomeFistContainer>
    )
  }
}
export default Home
