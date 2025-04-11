import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'

import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

import {BiListPlus} from 'react-icons/bi'
import Loader from 'react-loader-spinner'
import NextWatchContext from '../../context/NextWatchContext'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  VideoItemContainer,
  VideoItemSecondContainer,
  VideoPopContainer,
  Title,
  ViewTimeLikeSaveContainer,
  ViewTimeContainer,
  ViewCount,
  PublishedAt,
  LikeUnlikeContainer,
  ListItem,
  LikeButton,
  DislikeButton,
  SaveButton,
  LikePara,
  HorizontalLine,
  ThumbnailAndName,
  ThumbnailUrl,
  NameSubscriberContainer,
  Name,
  SubscriberCount,
  Description,
  FailureSubContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  RetryButton,
} from './styledComponents'

const videoItemDetailApiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    likeStatus: false,
    dislikeStatus: false,
    videoDetails: {},
    saveStatus: false,
    videoItemDetailApiStatus: videoItemDetailApiStatusConstant.initial,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({
      videoItemDetailApiStatus: videoItemDetailApiStatusConstant.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }

    const responseVideoDetails = await fetch(
      `https://apis.ccbp.in/videos/${id}`,
      options,
    )
    const responseVideoItemDetailsData = await responseVideoDetails.json()

    if (responseVideoDetails.ok) {
      const requiredResponseVideoItemDetails =
        responseVideoItemDetailsData.video_details

      const newResponseVideoItemDetailsData = {
        name: requiredResponseVideoItemDetails.channel.name,
        profileImageUrl:
          requiredResponseVideoItemDetails.channel.profile_image_url,
        subscriberCount:
          requiredResponseVideoItemDetails.channel.subscriber_count,

        description: requiredResponseVideoItemDetails.description,
        id: requiredResponseVideoItemDetails.id,
        publishedAt: formatDistanceToNow(
          new Date(requiredResponseVideoItemDetails.published_at),
        ),
        thumbnailUrl: requiredResponseVideoItemDetails.thumbnail_url,
        title: requiredResponseVideoItemDetails.title,
        videoUrl: requiredResponseVideoItemDetails.video_url,
        viewCount: requiredResponseVideoItemDetails.view_count,
      }

      this.setState({
        videoDetails: newResponseVideoItemDetailsData,
        videoItemDetailApiStatus: videoItemDetailApiStatusConstant.success,
      })
    } else {
      this.setState({
        videoItemDetailApiStatus: videoItemDetailApiStatusConstant.failure,
      })
    }
  }

  videoApiStatusConstantSuccess = () => (
    <NextWatchContext.Consumer>
      {value => {
        const {theme, toggleVideoInSavedList, savedList} = value
        const {likeStatus, dislikeStatus, saveStatus, videoDetails} = this.state
        const {
          name,
          profileImageUrl,
          subscriberCount,
          description,
          id,
          publishedAt,
          title,
          videoUrl,
          viewCount,
        } = videoDetails

        const onClickLikeStatus = () => {
          this.setState(prevState => ({
            likeStatus: !prevState.likeStatus,
            dislikeStatus: false,
          }))
        }

        const onClickDislikeStatus = () => {
          this.setState(prevState => ({
            dislikeStatus: !prevState.dislikeStatus,
            likeStatus: false,
          }))
        }

        const onClickSaveStatus = () => {
          this.setState(prevState => ({
            saveStatus: !prevState.saveStatus,
          }))
          const checkSaveList = savedList.find(each => each.id === id)
          if (checkSaveList) {
            const removeSaveList = savedList.filter(each => each.id !== id)
            toggleVideoInSavedList(removeSaveList)
          } else {
            toggleVideoInSavedList([
              ...savedList,
              {...videoDetails, saveStatus},
            ])
          }
        }

        return (
          <VideoPopContainer bgColor={theme} data-testid="videoItemDetails">
            <ReactPlayer url={videoUrl} width="100" height="200px" />
            <Title color={theme}>{title}</Title>
            <ViewTimeLikeSaveContainer>
              <ViewTimeContainer>
                <ViewCount>{viewCount} views</ViewCount>
                <PublishedAt>{publishedAt}</PublishedAt>
              </ViewTimeContainer>
              <LikeUnlikeContainer>
                <ListItem>
                  <LikeButton
                    likeColor={likeStatus}
                    onClick={onClickLikeStatus}
                    type="button"
                  >
                    <LikePara>Like</LikePara>
                    <AiOutlineLike />
                  </LikeButton>
                </ListItem>
                <ListItem>
                  <DislikeButton
                    dislikeColor={dislikeStatus}
                    onClick={onClickDislikeStatus}
                    type="button"
                  >
                    <LikePara>Dislike</LikePara>
                    <AiOutlineDislike />
                  </DislikeButton>
                </ListItem>
                <ListItem>
                  <SaveButton
                    onClick={() => onClickSaveStatus(id)}
                    saveColor={saveStatus}
                    type="button"
                  >
                    <LikePara>{saveStatus ? 'Saved' : 'Save'}</LikePara>
                    <BiListPlus />
                  </SaveButton>
                </ListItem>
              </LikeUnlikeContainer>
            </ViewTimeLikeSaveContainer>
            <HorizontalLine />
            <ThumbnailAndName>
              <ThumbnailUrl src={profileImageUrl} alt="channel logo" />
              <NameSubscriberContainer>
                <Name color={theme}>{name}</Name>
                <SubscriberCount>{subscriberCount} subscribers</SubscriberCount>
              </NameSubscriberContainer>
            </ThumbnailAndName>
            <Description color={theme}>{description}</Description>
          </VideoPopContainer>
        )
      }}
    </NextWatchContext.Consumer>
  )

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
            />
            <FailureHeading color={theme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailurePara color={theme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailurePara>
            <RetryButton onClick={this.getVideoItemDetails}>Retry</RetryButton>
          </FailureSubContainer>
        )
      }}
    </NextWatchContext.Consumer>
  )

  videoApiStatusConstantProgress = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  videoItemDetailApiStatusConstantResult = () => {
    const {videoItemDetailApiStatus} = this.state
    switch (videoItemDetailApiStatus) {
      case videoItemDetailApiStatusConstant.success:
        return this.videoApiStatusConstantSuccess()
      case videoItemDetailApiStatusConstant.failure:
        return this.videoApiStatusConstantFailure()
      case videoItemDetailApiStatusConstant.inProgress:
        return this.videoApiStatusConstantProgress()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <VideoItemContainer data-testid="videoItemDetails">
          <Header />
          <VideoItemSecondContainer>
            <SideBar />
            {this.videoItemDetailApiStatusConstantResult()}
          </VideoItemSecondContainer>
        </VideoItemContainer>
      </>
    )
  }
}

export default VideoItemDetails
