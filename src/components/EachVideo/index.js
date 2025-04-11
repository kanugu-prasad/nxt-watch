import {formatDistanceToNow} from 'date-fns'
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

const EachVideo = props => (
  <NextWatchContext.Consumer>
    {value => {
      const {theme} = value
      const {eachVideoDetail} = props
      const {
        channel,
        id,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
      } = eachVideoDetail
      const timeDuration = formatDistanceToNow(new Date(publishedAt))
      const {name, profileImageUrl} = channel
      return (
        <EachVideoList>
          <Link className="link-style" to={`/videos/${id}`}>
            <EachImage src={thumbnailUrl} alt="video thumbnail" />
            <ProfileTitleContainer>
              <ProfileImage src={profileImageUrl} alt="channel logo" />
              <OtherInfo>
                <Title color={theme}>{title}</Title>
                <Name>{name}</Name>
                <NameViewYearContainer>
                  <Name1>{name}</Name1>
                  <Year>{viewCount} Views</Year>
                  <Year>{timeDuration}</Year>
                </NameViewYearContainer>
              </OtherInfo>
            </ProfileTitleContainer>
          </Link>
        </EachVideoList>
      )
    }}
  </NextWatchContext.Consumer>
)
export default EachVideo
