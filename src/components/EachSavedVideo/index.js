import {Link} from 'react-router-dom'

import NextWatchContext from '../../context/NextWatchContext'
import {
  EachVideoList,
  EachImage,
  ProfileTitleContainer,
  ProfileImage,
  OtherInfo,
  Title,
  Name,
  NameViewYearContainer,
  Name1,
  Year,
} from './styledComponents'

import './index.css'

const EachSavedVideo = props => (
  <NextWatchContext.Consumer>
    {value => {
      const {theme} = value
      const {eachSavedDetail} = props
      const {
        name,
        profileImageUrl,
        id,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
      } = eachSavedDetail

      return (
        <Link className="link-style" to={`/videos/${id}`}>
          <EachVideoList>
            <EachImage src={thumbnailUrl} alt="video thumbnail" />
            <ProfileTitleContainer>
              <ProfileImage src={profileImageUrl} alt="channel logo" />
              <OtherInfo>
                <Title color={theme}>{title}</Title>
                <Name>{name}</Name>
                <NameViewYearContainer>
                  <Name1>{name}</Name1>
                  <Year>{viewCount} Views</Year>
                  <Year>{publishedAt}</Year>
                </NameViewYearContainer>
              </OtherInfo>
            </ProfileTitleContainer>
          </EachVideoList>
        </Link>
      )
    }}
  </NextWatchContext.Consumer>
)
export default EachSavedVideo
