import {MdPlaylistAdd} from 'react-icons/md'
import NextWatchContext from '../../context/NextWatchContext'
import EachSavedVideo from '../EachSavedVideo'
import {
  HomeFistContainer,
  HomeContainer,
  SavedContainer,
  SavedTitleContainer,
  SavedLogoContainer,
  SavedHeadingName,
  UnorderSavedContainer,
  FailureSubContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
} from './styledComponents'

import Header from '../Header'
import SideBar from '../SideBar'

const SavedVideos = () => (
  <NextWatchContext.Consumer>
    {value => {
      const {theme, savedList} = value
      const lengthSavedList = savedList.length
      const getSavedDetails = () => (
        <SavedContainer data-testid="savedVideos">
          <SavedTitleContainer bgColor={theme}>
            <SavedLogoContainer bgColor={theme}>
              <MdPlaylistAdd color="red" size="30" />
            </SavedLogoContainer>
            <SavedHeadingName color={theme}>Saved Videos</SavedHeadingName>
          </SavedTitleContainer>
          <UnorderSavedContainer>
            {savedList.map(each => (
              <EachSavedVideo key={each.id} eachSavedDetail={each} />
            ))}
          </UnorderSavedContainer>
        </SavedContainer>
      )

      const emptySavedView = () => (
        <FailureSubContainer bgColor={theme}>
          <FailureImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <FailureHeading color={theme}>No saved videos found</FailureHeading>
          <FailurePara color={theme}>
            You can save your videos while watching them
          </FailurePara>
        </FailureSubContainer>
      )
      return (
        <HomeFistContainer data-testid="savedVideos">
          <Header />
          <HomeContainer>
            <SideBar />
            {lengthSavedList === 0 ? emptySavedView() : getSavedDetails()}
          </HomeContainer>
        </HomeFistContainer>
      )
    }}
  </NextWatchContext.Consumer>
)

export default SavedVideos
