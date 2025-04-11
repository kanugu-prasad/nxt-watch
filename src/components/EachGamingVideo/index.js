import {Link} from 'react-router-dom'
import NextWatchContext from '../../context/NextWatchContext'
import {EachVideoList, ThumbnailUrl, Title, ViewCount} from './styledComponents'
import './index.css'

const EachGamingVideo = props => (
  <NextWatchContext.Consumer>
    {value => {
      const {theme} = value
      const {eachGamingDetail} = props
      const {id, thumbnailUrl, title, viewCount} = eachGamingDetail
      return (
        <Link className="link-style" to={`/videos/${id}`}>
          <EachVideoList>
            <ThumbnailUrl src={thumbnailUrl} />
            <Title color={theme}>{title}</Title>
            <ViewCount>{viewCount} Watching Worldwide</ViewCount>
          </EachVideoList>
        </Link>
      )
    }}
  </NextWatchContext.Consumer>
)
export default EachGamingVideo
